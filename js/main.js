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

const filterContainer = document.querySelector('#categories'),
productItems = document.querySelectorAll('.item')

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains('list')){
        // deactive existing active list
        filterContainer.querySelector('.active').classList.remove('active');
        // activate new list
        event.target.classList.add('active');
        const filterValue = event.target.getAttribute('data-filter');
        productItems.forEach((item) => {
            if(item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove('hide');
                item.classList.add('show');
            }
            else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }
});

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("compiler");
    const product = document.querySelectorAll(".item");
    const pname = storeitems.getElementsByClassName("description");

    for (var i=0; i<pname.length;i++) {
        let match = product[i].getElementsByClassName('description')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox)>-1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}
