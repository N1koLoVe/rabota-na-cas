const storeCard = document.querySelector(".cards");

const STORE_URL = "https://fakestoreapi.com/products";

function fetchStoreUrl() {
  fetch(STORE_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderProductList(storeCard, data);
    });
}

fetchStoreUrl();

function renderProductList(listElement, productData) {
  for (let el of productData) {
    const newDIV = document.createElement("DIV");
    newDIV.innerHTML = `
    <p>${el.id}</p>
    <h2>${el.title}</h2> 
    <img src="${el.image}" alt="image of the product" width = "150px">
    <strong>${el.description}</strong>
    <p>Price - ${el.price}$</p>
    <button>Buy</button>
    `;
    listElement.appendChild(newDIV);
  }
}
