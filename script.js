function acceptCookies(){

localStorage.setItem("cookiesAccepted","true")

document.getElementById("cookie-banner").style.display="none"

}

if(localStorage.getItem("cookiesAccepted")){

document.getElementById("cookie-banner").style.display="none"

}