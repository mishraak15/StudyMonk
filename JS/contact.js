let signin = document.querySelector('.signin');
let cookies = document.querySelector('.cookies');
let navbar = document.querySelector('.navbar');
let cookiesbtn = document.getElementById('cookiesbtn');
let foot=document.querySelector('.foot');
let container1=document.querySelector('.container1');
let placement=document.querySelectorAll('.placement');

cookiesbtn.addEventListener('click', (e) => {
    e.preventDefault();
    cookies.style.display = "none";
});

setTimeout(() => {
    signin.style.display = "none";
}, 10000);


const mode = document.getElementById('mode');
const contain = document.getElementById('contain');


mode.addEventListener('click', () => {
    myFunction();
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    navbar.classList.toggle("nav_color");
    mode.classList.toggle("white");
    foot.classList.toggle("dark-mode");
    container1.classList.toggle("dark-mode");
    for (let i = 0; i < placement.length; i++) {
        placement[i].classList.toggle('dark-mode');
    }
}
