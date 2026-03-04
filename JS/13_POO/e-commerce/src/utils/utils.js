export function generetId(){
    let r = Math.ceil( Math.random() * 100 + 1000 );
    return `${new Date().getTime()}_${r}`;
}

export function toDate(createdAt){
    if( createdAt instanceof Date ) return createdAt;

    if( typeof createdAt == "string" && createdAt.trim() != "" ){
        return new Date(createdAt);
    }else{
        return new Date();
    }
}

export function inRange(value, min = 10, max = 500){
    return !isNaN(value) && value >= min && value <= max;
}

export function minLen(value, min = 2, max = 20){
    return typeof value == "string" && 
                    value.trim().length >= min && 
                    value.trim().length <= max;
}