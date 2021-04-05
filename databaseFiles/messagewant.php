<?php 


if (session_id() == "")               //this is for diplaying name
{
   session_start();
}

 $emailid = $_SESSION['loginid'];

// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.
$sid = mysqli_real_escape_string($con, $data->pid);

// mysqli insert query





$query = "INSERT into messagejob (ojjid,ojwid) VALUES ('$sid','$emailid')";

// Inserting data into database
mysqli_query($con, $query);
echo true;
?>