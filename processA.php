<!DOCTYPE html>
<html>
<head>
    <title>Identify String or Number - Result</title>
    <link rel="stylesheet" href="styleA.css">
</head>
<body>
    <div class="container">
        <h1>Identify String or Number - Result</h1>
        <?php
            $input = $_POST['input'];

            if (is_numeric($input)) {
                echo "<p>The value entered, <strong>$input</strong>, is a number.</p>";
            } else {
                echo "<p>The value entered, <strong>$input</strong>, is a string.</p>";
            }
        ?>
        <p><a href="index.html">&laquo; Back to form</a></p>
    </div>
</body>
</html>
