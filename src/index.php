<!DOCTYPE html>
<html lang="fi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sakky - Course Assignments</title>
    </head>
    <body>

        <h1>Course assignments</h1>

        <?php
        echo "Docker: OK!<br>";

        try {
            $pdo = new PDO(
                'mysql:host=db;dbname=testdb;charset=utf8',
                'user',
                'pass'
            );
            echo "Database: OK!";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        ?>

    </body>
</html>