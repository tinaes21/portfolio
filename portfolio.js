let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let titles = document.querySelector(".whitelist");

menu.addEventListener("click", popup);

function popup(){
    console.log(this)
    nav.classList.toggle("open");
}
