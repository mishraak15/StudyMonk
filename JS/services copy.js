let signin = document.querySelector('.signin');
let cookies = document.querySelector('.cookies');
let navbar = document.querySelector('.navbar');
let cookiesbtn = document.getElementById('cookiesbtn');
let foot = document.querySelector('.foot');
let container2 = document.querySelector('.container2');
let number = document.querySelector('.number');
let small_box = document.querySelectorAll('.small_box');
let placement = document.querySelectorAll('.placement');

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
    number.classList.toggle("dark-mode");
    container2.classList.toggle("dark-mode");
    for (let i = 0; i < placement.length; i++) {
        placement[i].classList.toggle('dark-mode');
    }

    for (let i = 0; i < small_box.length; i++) {
        small_box[i].classList.toggle('dark-mode');
    }
}

let countries = document.getElementById('countries');
let selection = document.getElementById('selection');
let job_field = document.getElementById('job_field');
let i=0;
let j=0;
let k=0;
setInterval(() => {
    if(i<=37){
        i=i+1;
        countries.innerHTML = `${i}+`;
    }

    if(k<=104){
        k=k+5;
        job_field.innerHTML = `${k}+`;
    }
    if(j<=230000){
        j=j+10000;
    selection.innerHTML = `${j}+`;
    }
}, 100);


