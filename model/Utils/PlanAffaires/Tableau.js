// Tableau.js
// import Lignes from "./Lignes";
// import ElementLigne from './ElementLigne.js';

import Ligne from './Line.js';

// class Ligne {
//     constructor() {
//         this.elements = [];
//     }

//     ajouterElement(element) {
//         const elementLigne = new ElementLigne(element);
//         this.elements.push(elementLigne);
//     }

//     supprimerElement(index) {
//         this.elements.splice(index, 1);
//     }

//     afficherElements() {
//         return this.elements.map(element => element.afficherElement()).join(', ');
//     }
// }





// class Tableau {
//     constructor(nomTableau) {
//         this.nomTableau = nomTableau;
//         this.lignes = [];
//     }

//     ajouterLigne(ligneElement) {
//         const ligne = new Ligne();
//         ligne.ajouterElement(ligneElement);
//         this.lignes.push(ligne);
//     }

//     supprimerLigne(index) {
//         this.lignes.splice(index, 1);
//     }

//     afficherLignes() {
//         return this.lignes.map(ligne => ligne.afficherElements()).join(', ');
//     }
// }


class Tableau {
    constructor(nomTableau) {
        this.nomTableau = nomTableau;
        this.lignes = [];
    }

    ajouterLigne() {
        const ligne = new Ligne();
        this.lignes.push(ligne);
    }

    afficherDetails() {
        return {
            nomTableau: this.nomTableau,
            lignes: this.lignes.map(ligne => ligne.afficherElements())
        };
    }
}



export default Tableau;