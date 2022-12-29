console.log("works");

const groceryName = document.getElementById("grocery-name");
const groceryPrice = document.getElementById("grocery-price");
const groceryQuantity = document.getElementById("grocery-quantity");
const addBtn = document.querySelector(".add-btn");
const groceryList = document.querySelector(".grocery-list");

const groceries = [];


function resetInputs() {
    groceryName.value = "";
    groceryQuantity.value = "";
    groceryPrice.value = "";
  }
  

function addItems(groceryName,groceryPrice,groceryQuantity){
    const grocery = {
        groceryName: groceryName,
        groceryPrice: groceryPrice,
        groceryQuantity:groceryQuantity,
    };
    groceries.push(grocery);
}

// function updateTotal(){
//     for(let i = 0; i < groceries.length; i++){

//     }
// }

function renderGroceries() {
    let groceryListHTML = "<h2>List of groceries</h2> ";
    
    for (let grocery of groceries) {
      console.log(grocery);
        
      groceryListHTML += `<li>${grocery.groceryName} ${grocery.groceryQuantity} x ${grocery.groceryPrice}$ - ${grocery.groceryPrice * grocery.groceryQuantity}$</li>`;
    }
  
    groceryList.innerHTML = groceryListHTML;
  }

  addBtn.addEventListener("click", function(){
    addItems(groceryName.value,groceryQuantity.value,groceryPrice.value);
    console.log("groceries", groceries);
    renderGroceries();
    resetInputs();
  })
