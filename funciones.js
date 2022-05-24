const menu = document.querySelector(".menu");
const ham = document.querySelector(".img-header")

ham.addEventListener("click", ()=> {

menu.classList.toggle("open")

})

window.addEventListener("click", e=> {
if(menu.classList.contains("open") && e.target != menu && e.target !=ham) {

    menu.classList.toggle("open")

}


})