<?php
$servername = "localhost";
$username = "tim";
$password = "tim";
$dbname = "restaurant";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "insert into blog(blogID, title, name, message) values (100, testObSQLTUT, hansi, hoffentlich tut wenigstens der insert)";
$result = $conn->query($sql);

$blogID = $_GET['q'];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
