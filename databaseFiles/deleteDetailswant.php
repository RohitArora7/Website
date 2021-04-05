<?php 


if (session_id() == "")               //this is for diplaying name
{
   session_start();
}

 $emailid = $_SESSION['email'];
 
 
require_once 'database_connections.php';
$data = json_decode(file_get_contents("php://input")); 
$query = "Update outtjobwant set active=0 WHERE id=$data->del_id";
mysqli_query($con, $query);



$query2 = "UPDATE outt SET extra4=0  ";
mysqli_query($con, $query2);





echo true;
?>