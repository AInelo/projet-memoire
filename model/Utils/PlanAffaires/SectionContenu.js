// SectionContenu.js
class SectionContenu {
    constructor(titreSousSection, contenuSousSection) {
        this.titreSousSection = titreSousSection;
        this.contenuSousSection = contenuSousSection;
    }


    imprimer(doc) {
        doc.fontSize(14).text(this.titreSousSection, { underline: true });
        doc.text(this.contenuSousSection);
        doc.moveDown();
    }
}

export default SectionContenu;