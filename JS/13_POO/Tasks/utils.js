export function genererId(){
    let rand = Math.floor( Math.random() * 10 );
    return new Date().getTime() + rand;
}

export function isValide(titre){
    return titre.trim().length >= 2;
}

export function save(key, data){

    let jsonsData = data.map(task => task.toJson()); 
    
    localStorage.setItem( key, JSON.stringify(jsonsData) );    
}

export function read(key){
    return JSON.parse( localStorage.getItem( key ) ) || [];
}