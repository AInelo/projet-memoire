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

export default Section;

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

const planAffaire = new PlanAffaire(1, 'Domaine');

planAffaire.ajouterSection('Section 1');
planAffaire.sections[0].ajouterTableau('Tableau 1');
planAffaire.sections[0].tableaux[0].ajouterLigne();
planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Élément 1');
planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Élément 2');

planAffaire.ajouterSection('Section 2');
planAffaire.sections[1].ajouterTableau('Tableau 2');
planAffaire.sections[1].tableaux[0].ajouterLigne();
planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Élément A');
planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Élément B');

console.log(planAffaire.afficherSections());
console.log(planAffaire)