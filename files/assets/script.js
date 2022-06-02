const menu = document.querySelector(".menu-mobile")
menu.addEventListener("click" , ()=>{
    document.querySelector("header").classList.add("menu-version")
    document.querySelector("header h4").classList.add("limpar")
    document.querySelector(".menu-mobile").style.display = "none"
    document.querySelector(".fechar-menu").style.display = "flex"
    document.querySelector(".clicked-menu").style.display = "flex"
})

const fecharmenu = document.querySelector(".fechar-menu")
fecharmenu.addEventListener("click" , () =>{
    document.querySelector("header").classList.remove("menu-version")
    document.querySelector(".fechar-menu").style.display = "none"
    document.querySelector("header h4").classList.remove("limpar")
    document.querySelector(".menu-mobile").style.display = "flex"
    document.querySelector(".clicked-menu").style.display = "none"
})