function toggleMenu(){

const menu = document.getElementById("menu")

menu.classList.toggle("active")

}

function acceptCookies(){

localStorage.setItem("cookiesAccepted","true")

document.getElementById("cookie-banner").style.display="none"

}

if(localStorage.getItem("cookiesAccepted")){

document.getElementById("cookie-banner").style.display="none"

}