<?php
$servername = "localhost";
$username = "tim_select";
$password = "tim";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}
$blogID = $_GET['q'];
$Name = $conn->query("Select name from blog where blogID = 1");


echo $Name;

}
?>
