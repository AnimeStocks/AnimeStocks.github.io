"use strict";

let source;

switch(window.location.pathname) {
    case "/Manga.html":
        source = mangaList;
        break;
    case "/LN.html":
        source = lnList;
        break;
    case "/Merch.html":
        source = merchList;
        break;
}

let list = "";

for(let i = 0; i < source.length; i++) {
    list = list.concat(
        `<div class="item ${source[i].class}">
            <a href="${source[i].link}" target="_blank">
                <img src="${source[i].image}">
                <p class="description">${source[i].description}</p>
                <p class="price">${source[i].price}</p>
            </a>
        </div>`
    )
}

document.getElementById("compiler").innerHTML = list;