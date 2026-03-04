class Personne{
    #nom;
    #prenom;
    #dateNaisance;
    #email;
    #actif;

    static nombrePersonne = 0;

    constructor({prenom, nom, dateNaisance, email}){
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaisance = dateNaisance;
        this.email = email;
        this.#actif = true;

        Personne.nombrePersonne++;
    }

    changerEtat(){
        this.#actif = !this.#actif;
    }

    sePrensenter(){
        return `Je m'appelle ${this.#nom}, j'ai ${this.age} ans, email: ${this.#email} actif: ${this.#actif}.`
    }

    desactiver(){
        this.#actif = false;
    }

    changerEmail(nouveauEmail){
        if( !this.#actif ) throw new Error("Personne non active");
        this.email = nouveauEmail;
    }

    get nom(){return this.#nom;}
    get email(){return this.#email;}
    get prenom(){return this.#prenom;}
    get dateNaisance(){return this.#dateNaisance;}
    
    get age(){
        return new Date().getFullYear() - this.#dateNaisance.getFullYear();
    }

    get majeur(){
        return this.age >= 18 ? "majeur" : "mineur";
    }

    set dateNaisance(dn){
        if( !(dn instanceof Date) )throw new Error("La date n'est pas valide");
        if( dn > new Date() )throw new Error("La date ne peut être future");

        this.#dateNaisance = dn;

    }

    set prenom(prenom){
        this.#prenom = Personne.#normalize(prenom)
    }

    set nom(nom){
        this.#nom = Personne.#normalize(nom);
    }

    static #normalize(str){
        if( typeof str !== "string" || str.trim().length < 2 ) throw new Error("Le nom ne peut être vide");
        return str[0].toUpperCase() + str.slice(1)
    }

    set email(email){
        if( !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ) throw new Error("email pas valide");

        this.#email = email;
    }
}

