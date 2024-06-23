import DataBase from '../../../db/ConnexionDb.js';
import SectionModel from './SectionModel.js';


class PlanAffaireModel {
    constructor() {
        this.db = new DataBase();
    }

    async createPlanAffaire(planAffaire) {
        const { entrepreneurId, nom, domaine, cheminAccesPdf, cheminAccesWord, cheminAccesDonneesFinancieres, cheminAccesDonneesFinancieresTraite } = planAffaire;
        try {
            const sql = `
                INSERT INTO plan_affaire (entrepreneur_id, plan_affaire_nom, domaine, chemin_acces_pdf_file, chemin_acces_word_file, chemin_acces_donnees_financiere, chemin_acces_donnees_financiere_traite)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const params = [entrepreneurId, nom, domaine, cheminAccesPdf, cheminAccesWord, cheminAccesDonneesFinancieres, cheminAccesDonneesFinancieresTraite];
            const result = await this.db.execute(sql, params);
            const planAffaireId = result.insertId;
            
            // Enregistrer les sections
            for (const section of planAffaire.sections) {
                await SectionModel.createSection(planAffaireId, section);
            }

            return planAffaireId;
        } catch (error) {
            console.error('Erreur lors de la création du plan d\'affaire', error);
            throw error;
        }
    }
}

export default PlanAffaireModel;
