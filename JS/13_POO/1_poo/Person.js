class Person{
    #prenom;
    #ville;
    #age;

    constructor(prenom, ville, age){
        this.#prenom = prenom;
        this.#age = age;
        this.#ville = ville;
    }

    presentation(){
        return `prénom: ${this.#prenom}, ville: ${this.#ville}, âge: ${this.#age}`;
    }

    set age(age){
        if( isNaN(age) ) return;
        this.#age = age;
    }

    get age(){
        return this.#age;
    }

    set prenom(prenom){this.#prenom = prenom;}
    get prenom(){return this.#prenom;}

    set ville(ville){this.#ville = ville;}
    get ville(){return this.#ville;}
}

