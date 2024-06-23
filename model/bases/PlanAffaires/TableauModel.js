import DataBase from '../../../db/ConnexionDb.js';
import LigneModel from './LigneModel.js';

const db = new DataBase

class TableauModel {
 
    static async createTableau(sectionId, tableau) {
        const { nomTableau, lignes } = tableau;
        try {
            const sql = `
                INSERT INTO tableau (nom_tableau, section_id)
                VALUES (?, ?)
            `;
            const params = [nomTableau, sectionId];
            const result = await db.execute(sql, params);
            const tableauId = result.insertId;
            
            // Enregistrer les lignes
            // for (const ligne of lignes) {
            //     await LigneModel.createLigne(tableauId, ligne);
            // }

            // Enregistrer les lignes
            for (const ligne of lignes) {
                const elements = ligne.afficherElements();
                console.log(elements);
                await LigneModel.createLigne(tableauId, elements);
            }

            return tableauId;
        } catch (error) {
            console.error('Erreur lors de la création du tableau', error);
            throw error;
        }
    }
}

export default TableauModel;
