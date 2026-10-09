// Request the car data from api.php
fetch("api.php")

    // Convert the response from JSON text into JavaScript data
    .then(response => response.json())

    // Use the array of cars returned by the API
    .then(cars => {

        // Starts with an empty string for the HTML content
        let text = "";

        // Create a paragraph for each car
        cars.forEach(car => {
            text += `
                <p>
                    🚗 ${car.make} ${car.model}
                    (${car.year})
                </p>
            `;
        });

        // Add the generated paragraphs to the element with id="cars"
        document.getElementById("cars").innerHTML = text;
    });