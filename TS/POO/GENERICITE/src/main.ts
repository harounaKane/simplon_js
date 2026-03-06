type myType= {prenom: string, id: number};


let personne:myType = {prenom: "toto", id: 20};

console.log(personne);

type Role= "Admin" | "Client";

let user:Role = "Admin";

type Sexe = "Homme" | "Femme";
let genre:Sexe = "Femme";

type Emp= {id: number};
type Profil= {nom: string}
type EmpComplet= Emp & Profil
let utilisauter:EmpComplet = {id: 10, nom: "Toto"}

// GENERICITE

function retounerUneValeur(n: any): any{
    return "hhjh";
}

retounerUneValeur("toto");

function generic<T>(n: T): T{

    return n;
}

let y:number = generic<number>(2000);
let x = generic(true);


let tab1:number[] = [10, 30, 50, 400];
let tab2:string[] = ["toto", "tata", "titi", "400"];

// afficher(tab1);
// afficher(tab2);

function afficher<T>(tab: T[]){
    for(let val of tab){
        console.log(val);        
    }
}



class User<T>{
    _id:T;
    _prenom:string;

    constructor(id:T, prenom:string){
        this._id = id;
        this._prenom = prenom;
    }

}

console.log( new User("id_24", "Toto") );
console.log( new User(56, "Tata") );
