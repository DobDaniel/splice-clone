let cookiebar = document.getElementById("cookies");
let cookiebutton = document.getElementById("cookiesbutton");

const removeCookieBar = (e) => {
    e.preventDefault();
    cookiebar.style.setProperty('display','none','important')
};

cookiebutton.addEventListener("click", removeCookieBar);
