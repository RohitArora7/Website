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
$sname = mysqli_real_escape_string($con, $data->pname);
$scat = mysqli_real_escape_string($con, $data->pcat);
$sdur = mysqli_real_escape_string($con, $data->pdur);
$sdes = mysqli_real_escape_string($con, $data->pdes);

// mysqli insert query





$query = "INSERT into outtjobwant (kisne,pname,pcat,pdur,pdes) VALUES ('$emailid','$sname','$scat','$sdur','$sdes')";

// Inserting data into database
mysqli_query($con, $query);



$query2 = "UPDATE outt SET extra4=0  ";
mysqli_query($con, $query2);


echo true;
?>