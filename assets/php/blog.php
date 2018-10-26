<?php
$servername = "localhost";
$username = "tim_select";
$password = "tim";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}


$Author = $_POST["author"];
$Title = $_POST["titel"];
$Message = $_POST["text"];


$date_final = $date ." ". $time . ":00";

$currentdate = date("Y-m-d H:i:s");


//Hier in Tabelle blog inserten, zuerst Tabelle erstellen, blogID autoincrement
$sql = "insert into blog(title, message, name, date)  values ('$Title', '$Message', '$Author','$currentdate')";

if($conn->query($sql) === TRUE){
  header('Location: http://ec2-34-201-167-234.compute-1.amazonaws.com/blog.html');
  exit;
}

else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();

die();


?>
