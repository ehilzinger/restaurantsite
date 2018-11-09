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


$sql = "select * from blog";
$result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "Name: " . $row["name"]." ". $row["title"]." ". $row["message"]." BlogID:".$blogID;
//     }
// } else {
//     echo "0 results";
// }

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "".$row["blogID"]."/%$%/".$row["name"]."/%$%/". $row["title"]."/%$%/". $row["message"]."/%$%/".$row["date"]."/%$%/";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
