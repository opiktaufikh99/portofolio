// hb
const hb = document.querySelector("#hb");
const navMenu = document.querySelector("#nav-menu");

hb.addEventListener("click", function() {
    hb.classList.toggle("hb-aktif");
    navMenu.classList.toggle("hidden");
});

window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};