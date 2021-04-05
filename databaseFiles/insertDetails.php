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


$s1 = mysqli_real_escape_string($con, $data->pd1);
$s2 = mysqli_real_escape_string($con, $data->pd2);
$s3 = mysqli_real_escape_string($con, $data->pd3);



// mysqli insert query





$query = "INSERT into outtjob (kisne,pname,pcat,pdur,pdes,ppay,ploc,pnop) VALUES ('$emailid','$sname','$scat','$sdur','$sdes','$s1','$s2','$s3')";
mysqli_query($con, $query);


$query2 = "UPDATE outt SET extra=0  ";
mysqli_query($con, $query2);

//all extra is set 0 now when they view it set to 0 

echo true;
?>