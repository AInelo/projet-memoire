// import DataBase from './DataBase.js';
import DataBase from "../../../db/ConnexionDb.js";

const db = new DataBase


class ElementLigneModel {
    // constructor() {
    //     this.db = new DataBase();
    // }

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
}

export default ElementLigneModel;
