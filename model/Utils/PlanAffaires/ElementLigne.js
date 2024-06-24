// ElementLigne.js
class ElementLigne {
    constructor(element) {
        this.element = element;
    }

    afficherElement() {
        return this.element;
    }

    imprimer(doc) {
        doc.text(this.element, { continued: true });
    }
}

export default ElementLigne;
