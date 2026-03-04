let input = document.querySelector<HTMLInputElement>("#item");
let btn = document.querySelector<HTMLButtonElement>("#btn");
let ul = document.querySelector("#liste");


if( !input || !btn || !ul ) throw new Error("Un élément html est null");

const inputElem = input;

btn.addEventListener("click", () => {
    let item = input?.value.trim();
    
    if( item?.length ){
        let li = document.createElement("li");
        li.innerHTML = item;
        
        ul?.appendChild(li)

        inputElem.value = "";
        inputElem.focus();
    }
}); 

