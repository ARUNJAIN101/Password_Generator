const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector("#input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", ()=>{
 createPassword();
})

copyIconEl.addEventListener("click", ()=>{

    if(!inputEl.value){
        showAlert("Please first generate it!");
        return;
    }

    copyPassword();
    showAlert("Password Copied!");

    // bounce animation
    copyIconEl.classList.add("copy-bounce");

    setTimeout(()=>{
        copyIconEl.classList.remove("copy-bounce");
    },400);
});


function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:<>/?[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const passwordlength = 10;    
    let password = ""
    for (let index = 0; index < passwordlength; index++) {
    const randomNum = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNum, randomNum + 1);        
    }

    inputEl.value = password;
    alertContainerEl.innerText = password + "Copied!"

    inputEl.classList.add("generate-anim");

setTimeout(()=>{
   inputEl.classList.remove("generate-anim");
},350);

}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,999);
    navigator.clipboard.writeText(inputEl.value);
     
}

function showAlert(message){

      alertContainerEl.innerText = message;

    alertContainerEl.classList.remove("active");

    setTimeout(()=>{
        alertContainerEl.classList.add("active");
    },1000);
}
