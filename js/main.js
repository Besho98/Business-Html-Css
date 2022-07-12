// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function () {
    
    tLinks.classList.toggle("open")
};



// Menu Product
let BtnProd = document.querySelector(".menu-product");
let switcher = document.querySelector(".switcher");

BtnProd.onclick = function () {
    
    switcher.classList.toggle("open")
};



// Switcher Products
let switcherLis = document.querySelectorAll(".switcher li");
let prod = document.querySelectorAll(".gallery > div");

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageProd);
});

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageProd() {
    prod.forEach((div) => {
        div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}