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
$date = $_POST["date"];
$time = $_POST["time"];
$notes = $_POST["notes"];

$date_final = $date ." ". $time . ":00";

$currentdate = date("Y-m-d H:i:s");
$sql = "insert into reservations(lastname, firstname, date, amountofpersons, email, notes)  values ('$lastname', '$firstname', '$date_final', '$amountofpersons', '$email', '$notes')";

if($conn->query($sql) === TRUE){
  header('Location: http://www.la-cu.com/success.html');
  exit;
}

else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

die();
?>
