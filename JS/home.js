let signin = document.querySelector('.signin');
let cookies = document.querySelector('.cookies');
let navbar = document.querySelector('.navbar');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let aux_box = document.querySelector('.aux_box');
let drop_menu = document.querySelectorAll('.drop-menu');
let arrow = document.querySelectorAll('.arrow');
let cookiesbtn = document.getElementById('cookiesbtn');
let foot=document.querySelector('.foot');
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
    for (let i = 0; i < placement.length; i++) {
        placement[i].classList.toggle('dark-mode');
    }
    box2.classList.toggle("dark-mode");
    box3.classList.toggle("dark-mode");
    box4.classList.toggle("dark-mode");
    aux_box.classList.toggle("dark-mode");
}


const onClick = function () {
    var x = this.id;
    let a = document.getElementById(x);
    var y = x.replace('arrow', '') - 1;

    for (let i = 0; i < drop_menu.length; i++) {
        drop_menu[i].style.display = 'none';
        arrow[i].style.rotate = '-90deg';
    }
    a.style.rotate = '90deg';
    drop_menu[y].style.display = 'block';
    onclick;
}
document.getElementById('arrow1').onclick = onClick;
document.getElementById('arrow2').onclick = onClick;
document.getElementById('arrow3').onclick = onClick;
document.getElementById('arrow4').onclick = onClick;
document.getElementById('arrow5').onclick = onClick;