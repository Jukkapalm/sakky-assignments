<?php

// Connect to the MySQL database
$pdo = new PDO(
    "mysql:host=db:3306;dbname=carsdb;charset=utf8mb4",
    "root",
    "root"
);

// Create a query to get every row from the "cars" table
$sql = "SELECT * FROM cars";

// Run the query and stor the result
$stmt = $pdo->query($sql);

// Fetch all rows as associative arrays, using column names as keys
$cars = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Tell the browser that the response contains JSON data
header("Content-type: application/json");

// Convert the PHP array to JSON and send it to the browser
echo json_encode($cars);