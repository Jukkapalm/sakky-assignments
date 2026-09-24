// Class product and constructor
class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Method
    printProducts() {
        return `Product name: ${this.name}<br>Product price: ${this.price}`;
    }
}

function addProduct() {

    // Read product name and price from the input 
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const newProduct = new product(name, price);

    console.log(newProduct.name, newProduct.price);

    // Object
    const products = document.getElementById("products");

    products.innerHTML = `
    <p>${newProduct.printProducts()}</p>
    `;
}