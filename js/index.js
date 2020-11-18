//Begin Code for change select product and options

// Guarda los botones para luego hacer una llamada al evento click
var pPopular = document.querySelector("#popular-product-button");
var pNew = document.querySelector("#new-product-button");
var pDisco = document.querySelector("#discount-product-button");

pPopular.addEventListener('click', (e) => {
    quitarActiveBotones();
    pPopular.classList.add('active');
    document.querySelector('.popular-products').classList.remove('d-none');
})

pNew.addEventListener('click', (e) => {
    quitarActiveBotones();
    pNew.classList.add('active');
    document.querySelector('.new-products').classList.remove('d-none');
})
pDisco.addEventListener('click', (e) => {
    quitarActiveBotones();
    pDisco.classList.add('active');
    document.querySelector('.discount-products').classList.remove('d-none');
})

function quitarActiveBotones() {
    pPopular.classList.remove('active');
    pNew.classList.remove('active');
    pDisco.classList.remove('active');
    document.querySelector('.popular-products').classList.add('d-none');
    document.querySelector('.new-products').classList.add('d-none');
    document.querySelector('.discount-products').classList.add('d-none');
}
//End Code for change select product and options