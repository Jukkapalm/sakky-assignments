// Assign a class to the product
class Product {

    // Class constructor function, forcing for each object name and price
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Print a table row for the HTML document with the object's name and price
    printDetails() {
        return `<tr><td>${this.name}</td><td>${this.price}</td>`;
    }
}

// Updates the product list immediately when the webpage loads
updateProductList();

// Updates the HTML product catalog table by fetching products from the database
function updateProductList() {

    // Initializes the product list in memory as an array
    const productList = [];

    // GET-method API request
    fetch("api.php", {
        method: "GET",
    })

    // API always return JSON type data(defined in api.php)
    .then(response => response.json())
    .then(data => {

        // Loops through the product list array received in the JSON
        data.forEach(product => {

            // Create new product object and adds it to the product list
            productList.push(new Product(product.name, product.price));

            // Initializes the final HTML table row using the product object printDetails method
            let products = "";
            for (let i = 0; i < productList.length; i++) {
                products += productList[i].printDetails();
            }

            // Inserts the table row into the correct location in the HTML document
            document.getElementById("productList").innerHTML = products;
        });
    });
}

// Adds product to the database and updates the HTML table
function addProduct() {
    // Read products data from the inputs
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    // Creates product object from the input data
    const product = new Product(name, price);

    // Sends the product object in JSON format using POST API call
    fetch("api.php", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    })

    // API returns allways JSON format data(defined in api.php)
    .then(response => response.json())

    // Stores the API result in the msg field
    .then(data => {
        if (data.success) {
            document.getElementById("msg").textContent = "OK!"
        } else {
            document.getElementById("msg").textContent = "Error!"
        }

        // Updates the table on HTML page
        updateProductList();
    });
}