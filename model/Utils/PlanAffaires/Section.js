class Section {
    constructor(titre, contenus = []) {
        this.titre = titre;
        this.contenus = contenus;
    }

    ajouterContenuSection(contenu) {
        this.contenus.push(contenu);
    }

    supprimerContenu(contenu) {
        const index = this.contenus.indexOf(contenu);
        if (index > -1) {
            this.contenus.splice(index, 1);
        }
    }

    afficherContenus() {
        return this.contenus.join(', ');
    }
}

export default Section;