// class Section {
//     constructor(titre, contenus = []) {
//         this.titre = titre;
//         this.contenus = [];
//         this.tableau = [];
//     }

//     ajouterContenuSection(contenu) {
//         this.contenus.push(contenu);
//     }

//     supprimerContenu(contenu) {
//         const index = this.contenus.indexOf(contenu);
//         if (index > -1) {
//             this.contenus.splice(index, 1);
//         }
//     }

//     afficherContenus() {
//         return this.contenus.join(', ');
//     }
// }


// Section.js
import Tableau from './Tableau.js';
import SectionContenu from './SectionContenu.js';

class Section {
    constructor(titre) {
        this.titre = titre;
        this.tableaux = [];
        this.sectionContenus = [];
    }

    ajouterTableau(nomTableau) {
        const tableau = new Tableau(nomTableau);
        this.tableaux.push(tableau);
    }

    ajouterSectionContenu(titreSousSection, contenuSousSection) {
        const sectionContenu = new SectionContenu(titreSousSection, contenuSousSection);
        this.sectionContenus.push(sectionContenu);
    }

    supprimerTableau(index) {
        this.tableaux.splice(index, 1);
    }

    supprimerSectionContenu(index) {
        this.sectionContenus.splice(index, 1);
    }

    afficherTableaux() {
        return this.tableaux.map(tableau => ({
            nomTableau: tableau.nomTableau,
            lignes: tableau.afficherLignes()
        }));
    }

    afficherSectionContenus() {
        return this.sectionContenus.map(sectionContenu => ({
            titreSousSection: sectionContenu.titreSousSection,
            contenuSousSection: sectionContenu.contenuSousSection
        }));
    }
}




// class Section {
//     constructor(titre) {
//         this.titre = titre;
//         this.tableaux = [];
//         this.sectionContenus = [];
//     }

//     ajouterTableau(nomTableau) {
//         const tableau = new Tableau(nomTableau);
//         this.tableaux.push(tableau);
//         return tableau
//     }

//     ajouterSectionContenu(titreSousSection, contenuSousSection) {
//         const sectionContenu = new SectionContenu(titreSousSection, contenuSousSection);
//         this.sectionContenus.push(sectionContenu);
//         return sectionContenu
//     }

//     afficherContenus() {
//         return {
//             titre: this.titre,
//             tableaux: this.tableaux.map(tableau => tableau.afficherDetails()),
//             sectionContenus: this.sectionContenus.map(content => ({
//                 titreSousSection: content.titreSousSection,
//                 contenuSousSection: content.contenuSousSection
//             }))
//         };
//     }

// }



export default Section;



    // // imprimer(doc) {
    // //     doc.fontSize(16).text(this.titre, { underline: true });
    // //     doc.moveDown();
        
    // //     this.tableaux.forEach(tableau => {
    // //         tableau.imprimer(doc);
    // //     });

    // //     this.sectionContenus.forEach(sectionContenu => {
    // //         sectionContenu.imprimer(doc);
    // //     });

    // //     doc.moveDown();
    // // }


    // imprimer(doc) {
    //     doc.addPage().fontSize(16).text(this.titre, { underline: true });
    //     doc.moveDown();

    //     this.tableaux.forEach(tableau => tableau.imprimer(doc));
    //     this.sectionContenus.forEach(content => {
    //         doc.fontSize(14).text(content.titreSousSection, { underline: true });
    //         doc.fontSize(12).text(content.contenuSousSection);
    //         doc.moveDown();
    //     });
    // }





// const section = new Section('Présentation du Promoteur ');
// // section.ajouterTableau('Tableau 1');
// // section.ajouterTableau('Tableau 2');

// section.ajouterSectionContenu('Sous-section 1', 'Contenu de la sous-section 1');
// section.ajouterSectionContenu('Sous-section 2', 'Contenu de la sous-section 2');

// console.log(section.afficherTableaux());
// console.log(section.afficherSectionContenus());
// console.log("-------------------------Official Section------------------------------------------")
// console.log(section)

import PlanAffaire from './PlanAffaire.js';

// const planAffaire = new PlanAffaire(1, 'Domaine');

// planAffaire.ajouterSection('Section 1');
// planAffaire.sections[0].ajouterTableau('Tableau 1');
// planAffaire.sections[0].tableaux[0].ajouterLigne();
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Élément 1');
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Élément 2');

// planAffaire.ajouterSection('Section 2');
// planAffaire.sections[1].ajouterTableau('Tableau 2');
// planAffaire.sections[1].tableaux[0].ajouterLigne();
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Élément A');
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Élément B');

// console.log(planAffaire.afficherSections());
// console.log(planAffaire)




// const planAffaire = new PlanAffaire(1, 'Technologie');

// // Ajouter une section
// planAffaire.ajouterSection('Présentation du Projet');

// // Ajouter un tableau à la première section
// planAffaire.sections[0].ajouterTableau('Objectifs');
// planAffaire.sections[0].tableaux[0].ajouterLigne();
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 1');
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 2');

// // Ajouter une sous-section à la première section
// planAffaire.sections[0].ajouterSectionContenu('Introduction', 'Description détaillée du projet');

// // Ajouter une deuxième section
// planAffaire.ajouterSection('Analyse de Marché');

// // Ajouter un tableau à la deuxième section
// planAffaire.sections[1].ajouterTableau('Études de marché');
// planAffaire.sections[1].tableaux[0].ajouterLigne();
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 1');
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 2');

// // Ajouter une sous-section à la deuxième section
// planAffaire.sections[1].ajouterSectionContenu('Résumé', 'Résumé des études de marché');

// // console.log(JSON.stringify(planAffaire.afficherSections(), null, 2));
// console.log(JSON.stringify(planAffaire))