const nav = document.querySelector('header');
let prevScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollUp = window.pageYOffset;

    if (prevScroll < currentScrollUp) {
        nav.classList.add('hide');
    }
    else {
        nav.classList.remove('hide');
    }
    prevScroll = currentScrollUp;
})

