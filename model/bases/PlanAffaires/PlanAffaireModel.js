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

    static async getPlanAffaireDetails(planAffaireId) {
        const sql = `
            SELECT
                pa.id AS plan_affaire_id,
                pa.entrepreneur_id,
                pa.plan_affaire_nom,
                pa.domaine,
                pa.chemin_acces_pdf_file,
                pa.chemin_acces_word_file,
                pa.chemin_acces_donnees_financiere,
                pa.chemin_acces_donnees_financiere_traite,
                s.id AS section_id,
                s.titre AS section_titre,

                css.id AS contenus_sous_section_id,
                css.titre_partie,
                css.contenus AS contenus_sous_section,
                t.id AS tableau_id,
                t.nom_tableau,
                l.id AS ligne_id,
                el.id AS element_ligne_id,
                el.element
            FROM
                plan_affaire pa
            LEFT JOIN
                section s ON pa.id = s.planAffaire_id
            LEFT JOIN
                contenus_sous_section css ON s.id = css.section_id
            LEFT JOIN
                tableau t ON s.id = t.section_id
            LEFT JOIN
                ligne l ON t.id = l.tableau_id
            LEFT JOIN
                element_ligne el ON l.id = el.ligne_id
            WHERE
                pa.id = ?;
        `;
    
        try {
            const [rows] = await db.execute(sql, [planAffaireId]);
            return rows;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }


}

export default PlanAffaireModel;
