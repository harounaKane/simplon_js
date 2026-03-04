let form = document.querySelector("form");
let login = document.getElementById("login");

// mdp 4 carac mini, confirmation OK
let pass = document.getElementById("pass");
let confirm = document.getElementById("confirm");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    let loginValue = login.value;
    let mdpValue = pass.value;
    let confirmValue = confirm.value;

    let champsValid = true;

    if( loginValue.length < 2 ){
        document.getElementById("errLogin").textContent = "Saisie incorrecte !";
       champsValid = false;
    }

    if( mdpValue.length < 4 || mdpValue != confirmValue ){
        champsValid = false;
    }

    if( !document.querySelector("input[name='sexe']:checked ") ){
        champsValid = false;
    }

    if( champsValid ){
        form.submit();
    } 

    
    // let sexe = document.querySelectorAll("fieldset input");

    // sexe.forEach(s => {
    //     console.log(s.checked);
    // });

});

login.addEventListener("focus", (e) => {
    login.style.border = "2px solid blue !important";

    login.addEventListener("keyup", (event) => {
        console.log(event.key);        
    });

    login.addEventListener("blur", () => {
        let loginValue = login.value;
        if( loginValue.length < 2 ){
            document.getElementById("errLogin").textContent = "message errur"
        }
        
    });
    
});