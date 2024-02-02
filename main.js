const header = document.querySelector("header");
window.addEventListener ("scroll", 
function(){
    header.classList.toggle("sticky", this.window.scrollY > 120);
});

var typed = new Typed(".text", {
    strings:["Frontend Web Developer", "Mobile Developer", "Data Analyst"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};