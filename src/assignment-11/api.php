<?php

// PDO = PHP Data Objects
// Establishing database connection
$pdo = new PDO(
    "mysql:host=db:3306;dbname=kauppa;charset=utf8mb4",
    "root",
    "root"
);

// Sets default HTTP response header to application/json
header("Content-type: application/json");

// Retrieving the HTTP request method(such as GET, PUT, or POST)
// from the request data
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        // Defines an SQL statement to fetch all products
        $sql = "SELECT nimi AS name, hinta AS price FROM tuotteet";

        // Creates a query object from the SQL statement
        $stmt = $pdo->query($sql);

        // Executes the query and fetches results as an associative array using PDO::FETCH_ASSOC
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Returns the array as JSON
        echo json_encode($products);
        break;
    case 'POST':

        // Reads the HTTP request body as text
        $json = file_get_contents('php://input');

        // Parses request body text into a JSON array
        $data = json_decode($json, true);

        // Creates a prepared SQL statement for inserting user data
        $stmt = $pdo->prepare("INSERT INTO tuotteet (nimi, hinta) VALUES (:nimi, :hinta)");

        // Executes the prepared statement with parameters from JSON data
        $stmt->execute([
            ':nimi' => $data['name'],
            ':hinta' => $data['price']
        ]);

        // Returns the response
        echo json_encode([
            'success' => 'true'
        ]);

        break;
    default:

    // Returns HTTP 405 Method Not Allowed with JSON error message for unsupported methods
    http_response_code(405);
    echo json_encode("Error: Method not supported");
    break;
}

?>