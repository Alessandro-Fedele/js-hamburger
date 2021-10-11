const hamburgerIcon = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".close");

hamburgerIcon.addEventListener("click", function ()
{
    hamburgerMenu.classList.toggle("active");
});

hamburgerClose.addEventListener("click", function ()
{
    hamburgerMenu.classList.toggle("active");
});