<?php 


if (session_id() == "")               //this is for diplaying name
{
   session_start();
}

 $emailid = $_SESSION['loginid'];
 
 
// Including database connections
require_once 'database_connections.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from updated data
$sid = mysqli_real_escape_string($con, $data->pid);
$sname = mysqli_real_escape_string($con, $data->pname);
$scat = mysqli_real_escape_string($con, $data->pcat);
$sdur = mysqli_real_escape_string($con, $data->pdur);
$sdes = mysqli_real_escape_string($con, $data->pdes);


$s1 = mysqli_real_escape_string($con, $data->pd1);
$s2 = mysqli_real_escape_string($con, $data->pd2);
$s3 = mysqli_real_escape_string($con, $data->pd3);

// mysqli query to insert the updated data
$query = "UPDATE outtjob SET pname='$sname',pcat='$scat',pdur='$sdur',pdes='$sdes',ppay='$s1',ploc='$s2',pnop='$s3' WHERE kisne='$emailid' and id='$sid'";
mysqli_query($con, $query);
echo true;
?>