import DataBase from '../../../db/ConnexionDb.js';
import SectionModel from './SectionModel.js';

const db = new DataBase()

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
        console.log('id is : ' + planAffaireId)
        const sql = `
            SELECT
                pa.id AS plan_affaire_id,
                pa.entrepreneur_id,
                pa.plan_affaire_nom,
                pa.domaine,
                pa.chemin_acces_pdf_file,
                pa.chemin_acces_word_file,
                pa.chemin_acces_donnees_financiere,
                pa.chemin_acces_donnees_financiere_traite
            FROM
                plan_affaire pa
            WHERE
                pa.id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [planAffaireId]);
            
            console.log('Request successfully worked !')
            console.log(rows)

            if (!rows.length) {
                return null;
            }

            const planAffaire = {
                id: rows[0].plan_affaire_id,
                entrepreneur_id: rows[0].entrepreneur_id,
                plan_affaire_nom: rows[0].plan_affaire_nom,
                domaine: rows[0].domaine,
                chemin_acces_pdf_file: rows[0].chemin_acces_pdf_file,
                chemin_acces_word_file: rows[0].chemin_acces_word_file,
                chemin_acces_donnees_financiere: rows[0].chemin_acces_donnees_financiere,
                chemin_acces_donnees_financiere_traite: rows[0].chemin_acces_donnees_financiere_traite,
                sections: await SectionModel.getSectionsByPlanAffaireId(planAffaireId)
            };
            console.log(planAffaire)
            return planAffaire;
            
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }


    static async getPlanAffaireDetails_Current_Current_Current_Current(planAffaireId) {
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
                css.titre_partie AS contenus_sous_section_titre_partie,
                css.contenus AS contenus_sous_section_contenus,
                t.id AS tableau_id,
                t.nom_tableau AS tableau_nom,
                l.id AS ligne_id,
                el.id AS element_ligne_id,
                el.element AS element_ligne_element
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
    
            // Debugging logs
            console.log('Raw rows:', rows);
    
            if (!rows.length) {
                return null; // Aucune donnée trouvée
            }
    
            const planAffaire = {
                id: rows[0].plan_affaire_id,
                entrepreneur_id: rows[0].entrepreneur_id,
                plan_affaire_nom: rows[0].plan_affaire_nom,
                domaine: rows[0].domaine,
                chemin_acces_pdf_file: rows[0].chemin_acces_pdf_file,
                chemin_acces_word_file: rows[0].chemin_acces_word_file,
                chemin_acces_donnees_financiere: rows[0].chemin_acces_donnees_financiere,
                chemin_acces_donnees_financiere_traite: rows[0].chemin_acces_donnees_financiere_traite,
                sections: []
            };
    
            const sectionsMap = new Map();
            const sousSectionsMap = new Map();
            const tableauxMap = new Map();
            const lignesMap = new Map();
    
            for (const row of rows) {
                if (!sectionsMap.has(row.section_id)) {
                    sectionsMap.set(row.section_id, {
                        id: row.section_id,
                        titre: row.section_titre,
                        sous_sections: [],
                        tableaux: []
                    });
                }
    
                const section = sectionsMap.get(row.section_id);
    
                if (row.contenus_sous_section_id && !sousSectionsMap.has(row.contenus_sous_section_id)) {
                    const sousSection = {
                        id: row.contenus_sous_section_id,
                        titre_partie: row.contenus_sous_section_titre_partie,
                        contenus: row.contenus_sous_section_contenus
                    };
                    section.sous_sections.push(sousSection);
                    sousSectionsMap.set(row.contenus_sous_section_id, sousSection);
                }
    
                if (row.tableau_id && !tableauxMap.has(row.tableau_id)) {
                    const tableau = {
                        id: row.tableau_id,
                        nom_tableau: row.tableau_nom,
                        lignes: []
                    };
                    section.tableaux.push(tableau);
                    tableauxMap.set(row.tableau_id, tableau);
                }
    
                const tableau = tableauxMap.get(row.tableau_id);
    
                if (row.ligne_id && !lignesMap.has(row.ligne_id)) {
                    const ligne = {
                        id: row.ligne_id,
                        elements: []
                    };
                    tableau.lignes.push(ligne);
                    lignesMap.set(row.ligne_id, ligne);
                }
    
                const ligne = lignesMap.get(row.ligne_id);
    
                if (row.element_ligne_id) {
                    const element = {
                        id: row.element_ligne_id,
                        element: row.element_ligne_element
                    };
                    ligne.elements.push(element);
                }
            }
    
            // Convert the map of sections back to an array
            planAffaire.sections = Array.from(sectionsMap.values());
    
            console.log('Formatted planAffaire:', planAffaire);
    
            return planAffaire;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }
    




    static async getPlanAffaireDetails_Current_Current_Current(planAffaireId) {
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
    
            // Debugging logs
            console.log('Raw rows:', rows);
    
            if (!rows || !rows.plan_affaire_id) {
                return null; // Aucune donnée trouvée
            }
    
            // Organiser les données en une structure hiérarchique
            const planAffaire = {
                id: rows.plan_affaire_id,
                entrepreneur_id: rows.entrepreneur_id,
                plan_affaire_nom: rows.plan_affaire_nom,
                domaine: rows.domaine,
                chemin_acces_pdf_file: rows.chemin_acces_pdf_file,
                chemin_acces_word_file: rows.chemin_acces_word_file,
                chemin_acces_donnees_financiere: rows.chemin_acces_donnees_financiere,
                chemin_acces_donnees_financiere_traite: rows.chemin_acces_donnees_financiere_traite,
                sections: []
            };
    
            const section = {
                id: rows.section_id,
                titre: rows.section_titre,
                sous_sections: [],
                tableaux: []
            };
    
            if (rows.contenus_sous_section_id) {
                section.sous_sections.push({
                    id: rows.contenus_sous_section_id,
                    titre_partie: rows.titre_partie,
                    contenus: rows.contenus_sous_section
                });
            }
    
            if (rows.tableau_id) {
                const tableau = {
                    id: rows.tableau_id,
                    nom_tableau: rows.nom_tableau,
                    lignes: []
                };
    
                if (rows.ligne_id) {
                    const ligne = {
                        id: rows.ligne_id,
                        elements: []
                    };
    
                    if (rows.element_ligne_id) {
                        ligne.elements.push({
                            id: rows.element_ligne_id,
                            element: rows.element
                        });
                    }
    
                    tableau.lignes.push(ligne);
                }
    
                section.tableaux.push(tableau);
            }
    
            planAffaire.sections.push(section);
    
            console.log('Formatted planAffaire:', planAffaire);
    
            return planAffaire;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }
    








    static async getPlanAffaireDetails_CurrentCurrent(planAffaireId) {
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
    
            // Debugging logs
            console.log('Raw rows:', rows);
    
            if (!Array.isArray(rows) || rows.length === 0) {
                return null; // Aucune donnée trouvée
            }
    
            // Organiser les données en une structure hiérarchique
            const planAffaire = {
                id: rows[0].plan_affaire_id,
                entrepreneur_id: rows[0].entrepreneur_id,
                plan_affaire_nom: rows[0].plan_affaire_nom,
                domaine: rows[0].domaine,
                chemin_acces_pdf_file: rows[0].chemin_acces_pdf_file,
                chemin_acces_word_file: rows[0].chemin_acces_word_file,
                chemin_acces_donnees_financiere: rows[0].chemin_acces_donnees_financiere,
                chemin_acces_donnees_financiere_traite: rows[0].chemin_acces_donnees_financiere_traite,
                sections: []
            };
    
            const sectionsMap = new Map();
    
            for (const row of rows) {
                if (row.section_id) {
                    if (!sectionsMap.has(row.section_id)) {
                        sectionsMap.set(row.section_id, {
                            id: row.section_id,
                            titre: row.section_titre,
                            sous_sections: [],
                            tableaux: []
                        });
                    }
    
                    const section = sectionsMap.get(row.section_id);
    
                    if (row.contenus_sous_section_id) {
                        if (!section.sous_sections.some(ss => ss.id === row.contenus_sous_section_id)) {
                            section.sous_sections.push({
                                id: row.contenus_sous_section_id,
                                titre_partie: row.titre_partie,
                                contenus: row.contenus_sous_section
                            });
                        }
                    }
    
                    if (row.tableau_id) {
                        let tableau = section.tableaux.find(t => t.id === row.tableau_id);
                        if (!tableau) {
                            tableau = {
                                id: row.tableau_id,
                                nom_tableau: row.nom_tableau,
                                lignes: []
                            };
                            section.tableaux.push(tableau);
                        }
    
                        if (row.ligne_id) {
                            let ligne = tableau.lignes.find(l => l.id === row.ligne_id);
                            if (!ligne) {
                                ligne = {
                                    id: row.ligne_id,
                                    elements: []
                                };
                                tableau.lignes.push(ligne);
                            }
    
                            if (row.element_ligne_id) {
                                if (!ligne.elements.some(el => el.id === row.element_ligne_id)) {
                                    ligne.elements.push({
                                        id: row.element_ligne_id,
                                        element: row.element
                                    });
                                }
                            }
                        }
                    }
                }
            }
    
            planAffaire.sections = Array.from(sectionsMap.values());
    
            console.log('Formatted planAffaire:', planAffaire);
    
            return planAffaire;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }
    






    static async getPlanAffaireDetails_Current(planAffaireId) {
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
    
            // Debugging logs
            console.log('Raw rows:', rows);

            console.log(typeof(rows))
    
            if (!rows || rows.length === 0) {
                return null; // Aucune donnée trouvée
            }
    
            // Organiser les données en une structure hiérarchique
            // const planAffaire = {
            //     id: rows[0].plan_affaire_id,
            //     entrepreneur_id: rows[0].entrepreneur_id,
            //     plan_affaire_nom: rows[0].plan_affaire_nom,
            //     domaine: rows[0].domaine,
            //     chemin_acces_pdf_file: rows[0].chemin_acces_pdf_file,
            //     chemin_acces_word_file: rows[0].chemin_acces_word_file,
            //     chemin_acces_donnees_financiere: rows[0].chemin_acces_donnees_financiere,
            //     chemin_acces_donnees_financiere_traite: rows[0].chemin_acces_donnees_financiere_traite,
            //     sections: []
            // };

            const planAffaire = {
                id: rows.plan_affaire_id,
                entrepreneur_id: rows.entrepreneur_id,
                plan_affaire_nom: rows.plan_affaire_nom,
                domaine: rows.domaine,
                chemin_acces_pdf_file: rows.chemin_acces_pdf_file,
                chemin_acces_word_file: rows.chemin_acces_word_file,
                chemin_acces_donnees_financiere: rows.chemin_acces_donnees_financiere,
                chemin_acces_donnees_financiere_traite: rows.chemin_acces_donnees_financiere_traite,
                sections: []
            };
    
    
            const sectionsMap = new Map();
    
            for (const row of rows) {
                if (row.section_id) {
                    if (!sectionsMap.has(row.section_id)) {
                        sectionsMap.set(row.section_id, {
                            id: row.section_id,
                            titre: row.section_titre,
                            sous_sections: [],
                            tableaux: []
                        });
                    }
    
                    const section = sectionsMap.get(row.section_id);
    
                    if (row.contenus_sous_section_id) {
                        if (!section.sous_sections.some(ss => ss.id === row.contenus_sous_section_id)) {
                            section.sous_sections.push({
                                id: row.contenus_sous_section_id,
                                titre_partie: row.titre_partie,
                                contenus: row.contenus_sous_section
                            });
                        }
                    }
    
                    if (row.tableau_id) {
                        let tableau = section.tableaux.find(t => t.id === row.tableau_id);
                        if (!tableau) {
                            tableau = {
                                id: row.tableau_id,
                                nom_tableau: row.nom_tableau,
                                lignes: []
                            };
                            section.tableaux.push(tableau);
                        }
    
                        if (row.ligne_id) {
                            let ligne = tableau.lignes.find(l => l.id === row.ligne_id);
                            if (!ligne) {
                                ligne = {
                                    id: row.ligne_id,
                                    elements: []
                                };
                                tableau.lignes.push(ligne);
                            }
    
                            if (row.element_ligne_id) {
                                if (!ligne.elements.some(el => el.id === row.element_ligne_id)) {
                                    ligne.elements.push({
                                        id: row.element_ligne_id,
                                        element: row.element
                                    });
                                }
                            }
                        }
                    }
                }
            }
    
            planAffaire.sections = Array.from(sectionsMap.values());
    
            console.log('Formatted planAffaire:', planAffaire);
    
            return planAffaire;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }
    

    static async getPlanAffaireDetails_Quimarchait(planAffaireId) {
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
    
            // Debugging logs
            console.log('Raw rows:', rows);
    
            if (!rows || Object.keys(rows).length === 0) {
                return null; // Aucune donnée trouvée
            }
        // Organiser les données en une structure hiérarchique
        const planAffaire = {
            id: rows.plan_affaire_id,
            entrepreneur_id: rows.entrepreneur_id,
            plan_affaire_nom: rows.plan_affaire_nom,
            domaine: rows.domaine,
            chemin_acces_pdf_file: rows.chemin_acces_pdf_file,
            chemin_acces_word_file: rows.chemin_acces_word_file,
            chemin_acces_donnees_financiere: rows.chemin_acces_donnees_financiere,
            chemin_acces_donnees_financiere_traite: rows.chemin_acces_donnees_financiere_traite,
            sections: []
        };

        const sectionsMap = new Map();

        if (rows.section_id) {
            if (!sectionsMap.has(rows.section_id)) {
                sectionsMap.set(rows.section_id, {
                    id: rows.section_id,
                    titre: rows.section_titre,
                    contenus: rows.section_contenus,
                    sous_sections: [],
                    tableaux: []
                });
            }

            const section = sectionsMap.get(rows.section_id);

            if (rows.contenus_sous_section_id) {
                section.sous_sections.push({
                    id: rows.contenus_sous_section_id,
                    titre_partie: rows.titre_partie,
                    contenus: rows.contenus_sous_section
                });
            }

            if (rows.tableau_id) {
                const tableau = section.tableaux.find(t => t.id === rows.tableau_id);
                if (!tableau) {
                    section.tableaux.push({
                        id: rows.tableau_id,
                        nom_tableau: rows.nom_tableau,
                        lignes: []
                    });
                }
                const ligne = section.tableaux.find(t => t.id === rows.tableau_id).lignes.find(l => l.id === rows.ligne_id);
                if (!ligne && rows.ligne_id) {
                    section.tableaux.find(t => t.id === rows.tableau_id).lignes.push({
                        id: rows.ligne_id,
                        elements: []
                    });
                }
                if (rows.element_ligne_id) {
                    section.tableaux.find(t => t.id === rows.tableau_id).lignes.find(l => l.id === rows.ligne_id).elements.push({
                        id: rows.element_ligne_id,
                        element: rows.element
                    });
                }
            }
        }

        planAffaire.sections = Array.from(sectionsMap.values());

        console.log('Formatted planAffaire:', planAffaire);

        return planAffaire;
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
        throw error;
    }

        
    }


    static async getPlanAffaireDetailsAA(planAffaireId) {
        try {
            const sql = `
                SELECT pa.id as plan_affaire_id, pa.entrepreneur_id, pa.plan_affaire_nom, pa.domaine,
                       pa.chemin_acces_pdf_file, pa.chemin_acces_word_file, pa.chemin_acces_donnees_financiere,
                       pa.chemin_acces_donnees_financiere_traite,
                       s.id as section_id, s.titre as section_titre,
                       css.id as contenus_sous_section_id, css.titre_partie, css.contenus as contenus_sous_section,
                       t.id as tableau_id, t.nom_tableau,
                       l.id as ligne_id,
                       el.id as element_ligne_id, el.element
                FROM plan_affaire pa
                LEFT JOIN section s ON pa.id = s.planAffaire_id
                LEFT JOIN contenus_sous_section css ON s.id = css.section_id
                LEFT JOIN tableau t ON s.id = t.section_id
                LEFT JOIN ligne l ON t.id = l.tableau_id
                LEFT JOIN element_ligne el ON l.id = el.ligne_id
                WHERE pa.id = ?
            `;

            const [rows] = await db.execute(sql, [planAffaireId]);

            if (rows.length === 0) {
                return null;
            }

            const planAffaireDetails = {
                id: rows[0].plan_affaire_id,
                entrepreneurId: rows[0].entrepreneur_id,
                nom: rows[0].plan_affaire_nom,
                domaine: rows[0].domaine,
                cheminAccesPdf: rows[0].chemin_acces_pdf_file,
                cheminAccesWord: rows[0].chemin_acces_word_file,
                cheminAccesDonneesFinancieres: rows[0].chemin_acces_donnees_financiere,
                cheminAccesDonneesFinancieresTraite: rows[0].chemin_acces_donnees_financiere_traite,
                sections: []
            };

            rows.forEach(row => {
                let section = planAffaireDetails.sections.find(sec => sec.titre === row.section_titre);
                if (!section) {
                    section = {
                        titre: row.section_titre,
                        tableaux: [],
                        sectionContenus: []
                    };
                    planAffaireDetails.sections.push(section);
                }

                if (row.contenus_sous_section_id) {
                    section.sectionContenus.push({
                        titreSousSection: row.titre_partie,
                        contenuSousSection: row.contenus_sous_section
                    });
                }

                let tableau = section.tableaux.find(tbl => tbl.nomTableau === row.nom_tableau);
                if (!tableau) {
                    tableau = {
                        nomTableau: row.nom_tableau,
                        lignes: []
                    };
                    section.tableaux.push(tableau);
                }

                let ligne = tableau.lignes.find(lgn => lgn.ligne_id === row.ligne_id);
                if (!ligne) {
                    ligne = {
                        elements: []
                    };
                    tableau.lignes.push(ligne);
                }

                if (row.element_ligne_id) {
                    ligne.elements.push({
                        element: row.element
                    });
                }
            });

            return planAffaireDetails;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }


    static async getPlanAffaireDetailsA(planAffaireId) {
        try {
            const sql = `
                SELECT pa.id as plan_affaire_id, pa.entrepreneur_id, pa.plan_affaire_nom, pa.domaine,
                       pa.chemin_acces_pdf_file, pa.chemin_acces_word_file, pa.chemin_acces_donnees_financiere,
                       pa.chemin_acces_donnees_financiere_traite,
                       s.id as section_id, s.titre as section_titre,
                       css.id as contenus_sous_section_id, css.titre_partie, css.contenus as contenus_sous_section,
                       t.id as tableau_id, t.nom_tableau,
                       l.id as ligne_id,
                       el.id as element_ligne_id, el.element
                FROM plan_affaire pa
                LEFT JOIN section s ON pa.id = s.planAffaire_id
                LEFT JOIN contenus_sous_section css ON s.id = css.section_id
                LEFT JOIN tableau t ON s.id = t.section_id
                LEFT JOIN ligne l ON t.id = l.tableau_id
                LEFT JOIN element_ligne el ON l.id = el.ligne_id
                WHERE pa.id = ?
            `;

            const [rows] = await db.execute(sql, [planAffaireId]);

            if (rows.length === 0) {
                return null;
            }

            const planAffaireDetails = {
                id: rows[0].plan_affaire_id,
                entrepreneurId: rows[0].entrepreneur_id,
                nom: rows[0].plan_affaire_nom,
                domaine: rows[0].domaine,
                cheminAccesPdf: rows[0].chemin_acces_pdf_file,
                cheminAccesWord: rows[0].chemin_acces_word_file,
                cheminAccesDonneesFinancieres: rows[0].chemin_acces_donnees_financiere,
                cheminAccesDonneesFinancieresTraite: rows[0].chemin_acces_donnees_financiere_traite,
                sections: []
            };

            rows.forEach(row => {
                if (!row.section_id || !row.section_titre) return;

                let section = planAffaireDetails.sections.find(sec => sec.titre === row.section_titre);
                if (!section) {
                    section = {
                        titre: row.section_titre,
                        tableaux: [],
                        sectionContenus: []
                    };
                    planAffaireDetails.sections.push(section);
                }

                if (row.contenus_sous_section_id) {
                    section.sectionContenus.push({
                        titreSousSection: row.titre_partie,
                        contenuSousSection: row.contenus_sous_section
                    });
                }

                if (!row.tableau_id || !row.nom_tableau) return;

                let tableau = section.tableaux.find(tbl => tbl.nomTableau === row.nom_tableau);
                if (!tableau) {
                    tableau = {
                        nomTableau: row.nom_tableau,
                        lignes: []
                    };
                    section.tableaux.push(tableau);
                }

                if (!row.ligne_id) return;

                let ligne = tableau.lignes.find(lgn => lgn.ligne_id === row.ligne_id);
                if (!ligne) {
                    ligne = {
                        elements: []
                    };
                    tableau.lignes.push(ligne);
                }

                if (row.element_ligne_id) {
                    ligne.elements.push({
                        element: row.element
                    });
                }
            });

            return planAffaireDetails;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du plan d\'affaire', error);
            throw error;
        }
    }
}




export default PlanAffaireModel;
