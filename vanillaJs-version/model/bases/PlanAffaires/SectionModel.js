
import DataBase from '../../../db/ConnexionDb.js';
import TableauModel from './TableauModel.js';

// class SectionModel {
//     // constructor() {
//     //     this.db = new DataBase();
//     // }

//     static db = new DataBase();

//     static async createSection(planAffaireId, section) {
//         const { titre, sectionContenus } = section;
//         try {
//             const sql = `
//                 INSERT INTO section (planAffaire_id, titre)
//                 VALUES (?, ?)
//             `;
//             const params = [planAffaireId, titre];
//             const result = await this.db.execute(sql, params);
//             const sectionId = result.insertId;
            
//             // Enregistrer les contenus de sous-section
//             for (const contenu of sectionContenus) {
//                 await this.createSectionContenu(sectionId, contenu);
//             }

//             // Enregistrer les tableaux
//             for (const tableau of section.tableaux) {
//                 await TableauModel.createTableau(sectionId, tableau);
//             }

//             return sectionId;
//         } catch (error) {
//             console.error('Erreur lors de la création de la section', error);
//             throw error;
//         }
//     }

//     static async createSectionContenu(sectionId, contenu) {
//         const { titreSousSection, contenuSousSection } = contenu;
//         try {
//             const sql = `
//                 INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
//                 VALUES (?, ?, ?)
//             `;
//             const params = [sectionId, titreSousSection, contenuSousSection];
//             const result = await this.db.execute(sql, params);
//             return result.insertId;
//         } catch (error) {
//             console.error('Erreur lors de la création du contenu de sous-section', error);
//             throw error;
//         }
//     }
// }
const db = new DataBase

class SectionModel {
    // static db = new DataBase();

    static async createSection(planAffaireId, section) {
        const { titre, sectionContenus, tableaux } = section;
        console.log('Voici la section : ' + section)
        try {
            const sql = `
                INSERT INTO section (planAffaire_id, titre)
                VALUES (?, ?)
            `;
            const params = [planAffaireId, titre];
            const result = await db.execute(sql, params);
            const sectionId = result.insertId;

            // Enregistrer les contenus de sous-section
            for (const contenu of sectionContenus) {
                await this.createSectionContenu(sectionId, contenu);
            }

            // Enregistrer les tableaux
            for (const tableau of tableaux) {
                await TableauModel.createTableau(sectionId, tableau);
            }

            return sectionId;
        } catch (error) {
            console.error('Erreur lors de la création de la section', error);
            throw error;
        }
    }


    
    static async createSectionContenu(sectionId, contenu) {
        try {
            const { titreSousSection, contenuSousSection } = contenu;
            console.log(contenu)

            const sql = `
                INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
                VALUES (?, ?, ?)
            `;
            const params = [sectionId, titreSousSection, contenuSousSection];
            const result = await db.execute(sql, params);
            return result.insertId;
        } catch (error) {
            console.error('Erreur lors de la création du contenu de sous-section', error);
            throw error;
        }
    }







    static async getSectionsByPlanAffaireId(planAffaireId) {
        console.log("The getSectionsByPlanAffaireId started with id : " + planAffaireId)
        const sql = `
            SELECT
                s.id AS section_id,
                s.titre AS section_titre
            FROM
                section s
            WHERE
                s.planAffaire_id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [planAffaireId]);
            console.log(rows)
            const sections = [];

            for (const row of rows) {
                const section = {
                    id: row.section_id,
                    titre: row.section_titre,
                    sous_sections: await this.getSousSectionsBySectionId(row.section_id),
                    tableaux: await TableauModel.getTableauxBySectionId(row.section_id)
                };
                sections.push(section);
            }

            return sections;
        } catch (error) {
            console.error('Erreur lors de la récupération des sections', error);
            throw error;
        }
    }

    static async getSousSectionsBySectionId(sectionId) {
        const sql = `
            SELECT
                css.id AS contenus_sous_section_id,
                css.titre_partie AS contenus_sous_section_titre_partie,
                css.contenus AS contenus_sous_section_contenus
            FROM
                contenus_sous_section css
            WHERE
                css.section_id = ?;
        `;

        try {
            const [rows] = await db.execute(sql, [sectionId]);
            const sousSections = rows.map(row => ({
                id: row.contenus_sous_section_id,
                titre_partie: row.contenus_sous_section_titre_partie,
                contenus: row.contenus_sous_section_contenus
            }));

            return sousSections;
        } catch (error) {
            console.error('Erreur lors de la récupération des sous-sections', error);
            throw error;
        }
    }

}


export default SectionModel;



    // static async createSectionContenue(sectionId, contenu) {
    //     const { titreSousSection, contenuSousSection } = contenu;
    //     try {
    //         const sql = `
    //             INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
    //             VALUES (?, ?, ?)
    //         `;
    //         const params = [sectionId, titreSousSection, contenuSousSection];
    //         const result = await this.db.execute(sql, params);
    //         return result.insertId;
    //     } catch (error) {
    //         console.error('Erreur lors de la création du contenu de sous-section', error);
    //         throw error;
    //     }
    // }




// static async createSectionContenu(sectionId, contenu) {
    //     const { titreSousSection, contenuSousSection } = contenu;
    //     try {
    //         const sql = `
    //             INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
    //             VALUES (?, ?, ?)
    //         `;
    //         const params = [sectionId, titreSousSection, contenuSousSection];
    //         const result = await this.db.execute(sql, params);
    //         return result.insertId;
    //     } catch (error) {
    //         console.error('Erreur lors de la création du contenu de sous-section', error);
    //         throw error;
    //     }
    // }


    // static async createSectionContenuee(sectionId, contenu) {
    //     const { titreSousSection, contenuSousSection } = contenu;
    //     // Vérifiez les valeurs avant de créer la requête
    //     console.log(`sectionId: ${sectionId}, titreSousSection: ${titreSousSection}, contenuSousSection: ${contenuSousSection}`);

    //     try {
    //         const sql = `
    //             INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
    //             VALUES (?, ?, ?)
    //         `;

    //         // Assurez-vous que contenuSousSection n'est pas NULL
    //         const params = [sectionId, titreSousSection, contenuSousSection || '']; // Utilisation de '' pour éviter NULL indésirables

    //         const result = await this.db.execute(sql, params);
    //         return result.insertId;
    //     } catch (error) {
    //         console.error('Erreur lors de la création du contenu de sous-section', error);
    //         throw error;
    //     }
    // }






    // static async createSectionContenu(sectionId, contenu) {
    //     const { titreSousSection, contenuSousSection } = contenu;
    //     try {
    //         const sql = `
    //             INSERT INTO contenus_sous_section (section_id, titre_partie, contenus)
    //             VALUES (?, ?, ?)
    //         `;
    //         const params = [sectionId, titreSousSection, contenuSousSection];
    //         const result = await this.db.execute(sql, params);
    //         return result.insertId;
    //     } catch (error) {
    //         console.error('Erreur lors de la création du contenu de sous-section', error);
    //         throw error;
    //     }
    // }
