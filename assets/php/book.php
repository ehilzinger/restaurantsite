<?php
$servername = "localhost";
$username = "root";
$password = "restaurantdings";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}

$lastname = $_POST["lastname"];
$firstname = $_POST["firstname"];
$amountofpersons = $_POST["amountofpersons"];
$email = $_POST["email"];

$currentdate = date("Y-m-d H:i:s");
$sql = "insert into reservations(lastname, firstname, date, amountofpersons, email)  values ('$lastname', '$firstname', '$currentdate', '$amountofpersons', '$email')";

if($conn->query($sql) === TRUE){
  header('Location: http://www.la-cu.com');
  exit;
}

else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

die();
?>
