// import DataBase from './DataBase.js';
import DataBase from "../../../db/ConnexionDb.js";

const db = new DataBase


class ElementLigneModel {

    static async createElementLigne(ligneId, element) {
        try {
            const sql = `
                INSERT INTO element_ligne (ligne_id, element)
                VALUES (?, ?)
            `;
            const params = [ligneId, element];
            const result = await db.execute(sql, params);
            return result.insertId;
        } catch (error) {
            console.error('Erreur lors de la création de l\'élément de ligne', error);
            throw error;
        }
    }


    static async getElementsByLigneId(ligneId) {
        const sql = `
            SELECT
                el.id AS element_ligne_id,
                el.element AS element_ligne_element
            FROM
                element_ligne el
            WHERE
                el.ligne_id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [ligneId]);
            const elements = rows.map(row => ({
                id: row.element_ligne_id,
                element: row.element_ligne_element
            }));

            return elements;
        } catch (error) {
            console.error('Erreur lors de la récupération des éléments de ligne', error);
            throw error;
        }
    }
}

export default ElementLigneModel;
