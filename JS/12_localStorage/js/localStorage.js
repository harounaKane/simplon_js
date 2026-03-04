
function save(key, value){
    localStorage.setItem(key, toJson(value));
}

function read(key){
    return JSON.parse( localStorage.getItem(key) ) || [];
}

function toJson(obj){
    return JSON.stringify(obj);
}