class CollectifStartup extends Entrepreneur {
    constructor(id, nom, email, motDePasse, nomAssociation, ifu, nombreDeMembre = 0) {
        super(id, nom, email, motDePasse);
        this.nomAssociation = nomAssociation;
        this.ifu = ifu;
        this.nombreDeMembre = nombreDeMembre;
        this.membres = [];
    }

    // ajouterMembre(membre) {
    //     this.membres.push(membre);
    //     this.nombreDeMembre++;
    // }

    // retirerMembre(membre) {
    //     const index = this.membres.indexOf(membre);
    //     if (index > -1) {
    //         this.membres.splice(index, 1);
    //         this.nombreDeMembre--;
    //     }
    // }

    ajouterMembre(membre) {
        if (!membre instanceof MembreStartup) {
            throw new Error("L'objet doit être une instance de MembreStartup");
        }
        this.membres.push(membre);
        this.nombreDeMembre++;
    }

    retirerMembre(membre) {
        const index = this.membres.indexOf(membre);
        if (index > -1) {
            this.membres.splice(index, 1);
            this.nombreDeMembre--;
        } else {
            throw new Error("Membre non trouvé dans le collectif");
        }
    }


}
