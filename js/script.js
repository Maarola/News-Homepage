
const navOpen = document.getElementById("button__open")
const navClose = document.getElementById("button__close")

const nav = document.querySelector(".nav__mobile")
const backg = document.querySelector("body")

navOpen.addEventListener("click", abrirMenu)
navClose.addEventListener("click", fecharMenu)

function abrirMenu(){
    nav.style.display = "flex",
    backg.classList.add("escurecer")
}
function fecharMenu(){
    nav.style.display = "none"
    backg.classList.remove("escurecer")
}