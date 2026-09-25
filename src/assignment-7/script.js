// Class product and constructor
class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Method
    printProducts() {
        return `Product name: ${this.name}<br>Product price: ${this.price}<br>`;
    }
}

const productList = [];

function addProduct() {

    // Read product name and price from the input 
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    // Create new product
    const newProduct = new product(name, price);

    // Add product to the productlist
    productList.push(newProduct)

    // Update text content
    let printProductlist = "";
    for (let i = 0; i < productList.length; i++) {
        printProductlist += productList[i].printProducts();
    }

    // Update products div
    document.getElementById("products").innerHTML = printProductlist;

    totalPrice();
}

// Calculates the total of the products prices
function totalPrice() {
    let amount = 0;
    for (let i = 0; i < productList.length; i++) {
        amount += parseFloat(productList[i].price);
    }

    document.getElementById("totalprice").innerHTML = amount;
}