// Ligne.js
import ElementLigne from './ElementLigne.js';

class Ligne {
    constructor() {
        this.elements = [];
    }

    ajouterElement(element) {
        const elementLigne = new ElementLigne(element);
        this.elements.push(elementLigne);
    }

    supprimerElement(index) {
        this.elements.splice(index, 1);
    }

    afficherElements() {
        return this.elements.map(element => element.afficherElement()).join(', ');
    }
}

export default Ligne;