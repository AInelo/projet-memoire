import DataBase from '../../../db/ConnexionDb.js';
import ElementLigneModel from './ElementLigneModel.js';

class LigneModel {
    constructor() {
        this.db = new DataBase();
    }

    async createLigne(tableauId, ligne) {
        try {
            const sql = `
                INSERT INTO ligne (tableau_id)
                VALUES (?)
            `;
            const params = [tableauId];
            const result = await this.db.execute(sql, params);
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
}

export default LigneModel;
