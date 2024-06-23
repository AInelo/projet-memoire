// models/PlanAffairesModel.js
import DataBase from '../../db/ConnexionDb.js';
import PlanAffaire from '../Utils/PlanAffaires/PlanAffaire.js';
import Section from '../Utils/PlanAffaires/Section.js';
const db = new DataBase();

class PlanAffaireModel {
    static async createPlanAffaires(titreSection, domaine, donneesFinancieres) {
        try {
            const query = 'INSERT INTO plans_affaires (domaine, donnees_financieres) VALUES (?, ?)';
            const [result] = await db.execute(query, [domaine, JSON.stringify(donneesFinancieres)]);
            const planId = result.insertId;
            
            const plan = new PlanAffaire(planId, titreSection, domaine, donneesFinancieres);

            // Ajouter la section initiale à la base de données
            await this.addSection(planId, titreSection);

            return plan;
        } catch (err) {
            throw new Error(`Error creating plan d'affaires: ${err.message}`);
        }
    }

    static async getPlansAffaires() {
        try {
            const query = 'SELECT * FROM plans_affaires';
            const [rows] = await db.execute(query);
            return rows;
        } catch (err) {
            throw new Error(`Error fetching plans d'affaires: ${err.message}`);
        }
    }

    static async getPlanAffairesById(id) {
        try {
            const query = 'SELECT * FROM plans_affaires WHERE id = ?';
            const [rows] = await db.execute(query, [id]);

            if (rows.length > 0) {
                const planData = rows[0];
                const plan = new PlanAffaire(planData.id, '', planData.domaine, JSON.parse(planData.donnees_financieres));

                // Récupérer les sections
                const sections = await this.getSectionsByPlanId(plan.id);
                plan.personnaliserSections(sections);

                return plan;
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
            await db.execute(query, [id]);
            return true;
        } catch (err) {
            throw new Error(`Error deleting plan d'affaires: ${err.message}`);
        }
    }

    static async updatePlanAffaires(plan) {
        try {
            const query = 'UPDATE plans_affaires SET domaine = ?, donnees_financieres = ? WHERE id = ?';
            await db.execute(query, [plan.domaine, JSON.stringify(plan.donneesFinancieres), plan.id]);

            // Supprimer les sections existantes et les réinsérer
            await this.deleteSectionsByPlanId(plan.id);
            for (const section of plan.sections) {
                await this.addSection(plan.id, section.titre, section.contenus);
            }

            return true;
        } catch (err) {
            throw new Error(`Error updating plan d'affaires: ${err.message}`);
        }
    }






    // Méthodes pour gérer les sections

    static async addSection(planId, titreSection, contenus = []) {
        try {
            const query = 'INSERT INTO sections (plan_id, titre, contenus) VALUES (?, ?, ?)';
            await db.execute(query, [planId, titreSection, JSON.stringify(contenus)]);
        } catch (err) {
            throw new Error(`Error adding section: ${err.message}`);
        }
    }

    static async getSectionsByPlanId(planId) {
        try {
            const query = 'SELECT * FROM sections WHERE plan_id = ?';
            const [rows] = await db.execute(query, [planId]);
            return rows.map(row => new Section(row.titre, JSON.parse(row.contenus)));
        } catch (err) {
            throw new Error(`Error fetching sections: ${err.message}`);
        }
    }

    static async deleteSectionsByPlanId(planId) {
        try {
            const query = 'DELETE FROM sections WHERE plan_id = ?';
            await db.execute(query, [planId]);
        } catch (err) {
            throw new Error(`Error deleting sections: ${err.message}`);
        }
    }
}

export default PlanAffaireModel;
