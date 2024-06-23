
import DataBase from '../../../db/ConnexionDb.js';
import TableauModel from './TableauModel.js';

class SectionModel {
    constructor() {
        this.db = new DataBase();
    }

    async createSection(planAffaireId, section) {
        const { titre, sectionContenus } = section;
        try {
            const sql = `
                INSERT INTO section (planAffaire_id, titre)
                VALUES (?, ?)
            `;
            const params = [planAffaireId, titre];
            const result = await this.db.execute(sql, params);
            const sectionId = result.insertId;
            
            // Enregistrer les contenus de sous-section
            for (const contenu of sectionContenus) {
                await this.createSectionContenu(sectionId, contenu);
            }

            // Enregistrer les tableaux
            for (const tableau of section.tableaux) {
                await TableauModel.createTableau(sectionId, tableau);
            }

            return sectionId;
        } catch (error) {
            console.error('Erreur lors de la création de la section', error);
            throw error;
        }
    }

    async createSectionContenu(sectionId, contenu) {
        const { titreSousSection, contenuSousSection } = contenu;
        try {
            const sql = `
                INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
                VALUES (?, ?, ?)
            `;
            const params = [sectionId, titreSousSection, contenuSousSection];
            const result = await this.db.execute(sql, params);
            return result.insertId;
        } catch (error) {
            console.error('Erreur lors de la création du contenu de sous-section', error);
            throw error;
        }
    }
}

export default SectionModel;