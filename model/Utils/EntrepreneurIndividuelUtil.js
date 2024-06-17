class EntrepreneurIndividuel extends Entrepreneur {
    constructor(id, nom, email, motDePasse, ifuPersonnel, age, sex) {
        super(id, nom, email, motDePasse);
        this.ifuPersonnel = ifuPersonnel;
        this.age = age;
        this.sex = sex;
    }

    ajouterSonIfu(ifu) {
        this.ifuPersonnel = ifu;
    }
}
