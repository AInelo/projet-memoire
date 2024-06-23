import DataBase from '../../../db/ConnexionDb.js';
import LigneModel from './LigneModel.js';


class TableauModel {
    constructor() {
        this.db = new DataBase();
    }

    async createTableau(sectionId, tableau) {
        const { nomTableau, lignes } = tableau;
        try {
            const sql = `
                INSERT INTO tableau (nom_tableau, section_id)
                VALUES (?, ?)
            `;
            const params = [nomTableau, sectionId];
            const result = await this.db.execute(sql, params);
            const tableauId = result.insertId;
            
            // Enregistrer les lignes
            for (const ligne of lignes) {
                await LigneModel.createLigne(tableauId, ligne);
            }

            return tableauId;
        } catch (error) {
            console.error('Erreur lors de la création du tableau', error);
            throw error;
        }
    }
}

export default TableauModel;
