const menubar = document.getElementById('menubar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (menubar) {
    menubar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheigth = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 90;

        if(revealtop < windowheigth - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
