import DataBase from '../../../db/ConnexionDb.js';
import ElementLigneModel from './ElementLigneModel.js';

const db = new DataBase

class LigneModel {
   
    static async createLigne(tableauId, ligne) {
        try {
            const sql = `
                INSERT INTO ligne (tableau_id)
                VALUES (?)
            `;
            const params = [tableauId];
            const result = await db.execute(sql, params);
            const ligneId = result.insertId;
            
            // Enregistrer les éléments de ligne
            for (const element of ligne) {
                
                await ElementLigneModel.createElementLigne(ligneId, element);
            }

            return ligneId;
        } catch (error) {
            console.error('Erreur lors de la création de la ligne', error);
            throw error;
        }
    }


    static async getLignesByTableauId(tableauId) {
        const sql = `
            SELECT
                l.id AS ligne_id
            FROM
                ligne l
            WHERE
                l.tableau_id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [tableauId]);
            const lignes = [];

            for (const row of rows) {
                const ligne = {
                    id: row.ligne_id,
                    elements: await ElementLigneModel.getElementsByLigneId(row.ligne_id)
                };
                lignes.push(ligne);
            }

            return lignes;
        } catch (error) {
            console.error('Erreur lors de la récupération des lignes', error);
            throw error;
        }
    }
}

export default LigneModel;
