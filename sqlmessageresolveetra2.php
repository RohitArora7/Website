<?php



if (session_id() == "")               //this is for diplaying name
{
   session_start();
}

 $emailid = $_SESSION['loginid'];
 


require_once("./databaseFiles/database_connections.php");

$result=mysqli_query($con,"UPDATE messagejob SET etra2=1 WHERE  (jobneed=$emailid or jobneedto=$emailid) ");
    
   // $row  = mysqli_fetch_array($result);
    
    echo true;
    exit;
    