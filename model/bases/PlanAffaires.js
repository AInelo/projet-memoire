// Exemple de classe PlanAffairesModel pour l'interaction avec la base de données
import { execute } from '../config/ConnexionDb';

class PlanAffairesModel {
    static async createPlanAffaires(section, domaine, donneesFinancieres) {
        try {
            const query = 'INSERT INTO plans_affaires (section, domaine, donnees_financieres) VALUES (?, ?, ?)';
            const [result] = await execute(query, [section, domaine, JSON.stringify(donneesFinancieres)]);
            return result.insertId;
        } catch (err) {
            throw new Error(`Error creating plan d'affaires: ${err.message}`);
        }
    }

    static async getPlansAffaires() {
        try {
            const query = 'SELECT * FROM plans_affaires';
            const [rows] = await execute(query);
            return rows;
        } catch (err) {
            throw new Error(`Error fetching plans d'affaires: ${err.message}`);
        }
    }

    static async getPlanAffairesById(id) {
        try {
            const query = 'SELECT * FROM plans_affaires WHERE id = ?';
            const [rows] = await execute(query, [id]);
            if (rows.length > 0) {
                const planData = rows[0];
                return new PlanAffaires(planData.id, planData.section, planData.domaine, JSON.parse(planData.donnees_financieres));
            } else {
                return null;
            }
        } catch (err) {
            throw new Error(`Error fetching plan d'affaires: ${err.message}`);
        }
    }

    static async deletePlanAffaires(id) {
        try {
            const query = 'DELETE FROM plans_affaires WHERE id = ?';
            await execute(query, [id]);
            return true;
        } catch (err) {
            throw new Error(`Error deleting plan d'affaires: ${err.message}`);
        }
    }

    // Méthodes supplémentaires pour la mise à jour, etc. peuvent être ajoutées ici
}

export default PlanAffairesModel;
