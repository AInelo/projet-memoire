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


    static async getTableauxBySectionId(sectionId) {
        const sql = `
            SELECT
                t.id AS tableau_id,
                t.nom_tableau AS tableau_nom
            FROM
                tableau t
            WHERE
                t.section_id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [sectionId]);
            const tableaux = [];

            for (const row of rows) {
                const tableau = {
                    id: row.tableau_id,
                    nom_tableau: row.tableau_nom,
                    lignes: await LigneModel.getLignesByTableauId(row.tableau_id)
                };
                tableaux.push(tableau);
            }

            return tableaux;
        } catch (error) {
            console.error('Erreur lors de la récupération des tableaux', error);
            throw error;
        }
    }
}

export default TableauModel;
