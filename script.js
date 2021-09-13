let cookiebar = document.getElementById("cookies");
let cookiebutton = document.getElementById("cookiesbutton");

const removeCookieBar = (e) => {
    e.preventDefault();
    cookiebar.style.setProperty("display", "none", "important");
};

cookiebutton.addEventListener("click", removeCookieBar);

let learnmore = document.getElementById("learn-more");

const scrollDown = (e) => {
    e.preventDefault();
    window.scroll({ top: 900, behavior: "smooth" });
};

learnmore.addEventListener("click", scrollDown);

let hamburger = document.getElementById("hamburger");
let sidemenu = document.getElementById("sidemenu");
let overlay = document.getElementById("overlay");

const openSide = (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    sidemenu.style.width = "250px";

};
const closeSide = (e) => {
    e.preventDefault();
    
    if (e.layerX > 251) {
        sidemenu.style.width = "0px";
        overlay.style.display = "none";
    }
};

hamburger.addEventListener("click", openSide);
document.addEventListener("click", closeSide);

window.addEventListener("resize", function(e){
    var width = window.innerWidth;
    if(width>767){
        sidemenu.style.width = "0px";
        overlay.style.display = "none";
    }
})