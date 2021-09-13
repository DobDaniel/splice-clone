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
