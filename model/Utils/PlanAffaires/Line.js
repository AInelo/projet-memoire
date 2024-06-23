// Ligne.js
import ElementLigne from './ElementLigne.js';

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


// class Ligne {
//     constructor() {
//         this.elements = [];
//     }

//     ajouterElementLigne(element) {
//         const elementLigne = new ElementLigne(element);
//         this.elements.push(elementLigne);
//         return elementLigne
//     }

//     afficherElements() {
//         return this.elements.map(element => element.element);
//     }
// }


class Ligne {
    constructor() {
        this.elements = [];
    }

    ajouterElementLigne(element) {
        const elementLigne = new ElementLigne(element);
        this.elements.push(elementLigne);
        return elementLigne;
    }

    afficherElements() {
        return this.elements.map(elementLigne => elementLigne.element);
    }
}

export default Ligne;