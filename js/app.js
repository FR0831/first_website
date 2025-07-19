//setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("nav-close");

//show nav 

navBtn.addEventListener("click" , () => {
    navbar.classList.add("show-nav");
});

//close nav

navclose.addEventListener("click" , ()=>
{
    navbar.classList.remove("show-nav");
});
