<?php
if (session_id() == "")               //this is for diplaying name
{
   session_start();
}
$emailid = $_SESSION['loginid'];
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        
         <link rel="stylesheet" href="notification-demo-style.css" type="text/css">
        
	<script type="text/javascript">

	function myFunction(value1,value2,value3) {
		$.ajax({
			url: "view_notification3.php",
			type: "POST",
			data: 'data1='+value1+'&data2='+value2+'&data3='+value3,
			success: function(data){
				$("#notification-count").remove();					
				$("#notification-latest").show();
                                $("#notification-latest").html(data);
			},
			error: function(){}           
		});
	 }
	 
	 $(document).ready(function() {
		$('body').click(function(e){
			if ( e.target.id != 'notification-icon'){
				$("#notification-latest").hide();
			}
		});
	});
	function myFunction2(value1,value2,value3) {
		$.ajax({
			url: "deletemessage4.php",
			type: "POST",
			data: 'data1='+value1+'&data2='+value2+'&data3='+value3,
			success: function(data){
				
			},
			error: function(){}           
		});
	 }
         
         
       function reload() 
{
    document.getElementById('InlineFrame1').src += '';
} 
	</script>
        
    </head>
    <body>
       
        <div data-ng-init="callmeb4();"></div>
        
<div style="float:right;">{{inc}}---{{incc}}---{{inccc}}</div>
        
<div style="position:absolute;left:10px;top:-29px;width:681px;height:50px;z-index:11">
<h6 ><a class="button button1" href="#jobwant">Post Profile</a></h6>
<h6 ><a class="button button1" href="#projectjob">Profile Posted</a></h6>
<h6 ><a class="button button1" href="#jobprofilemessage">Message</a></h6>
</div>

        
        
 
 
<br><br>
 
<table id='customers'> 
    <tr><th>Employee Profile Created</th><th>Conversation</th><th>Message</th><th>Time</th><th>action</th></tr>

   <tbody ng-repeat='detail in posts'>     
     <tr>
     <td> {{detail.project}} </td>
     <td><i><a  href  id="click" ng-click="profileviewpass(detail.pid) "> {{detail.firstperson}}</a>&gt; <a href ng-click="profileviewpass(detail.spid)"> {{detail.secondperson}}</a></i></td>
     <td>{{detail.message}}</td>
     <td>{{detail.date_time}}</td>
     <td><a id="btn" href ng-click="displayjobsmessageview4(detail.jobid,detail.jobtemp,<?php echo $emailid; ?>); displayjobsmessagenotification4(detail.jobid,detail.jobtemp,<?php echo $emailid; ?>); " >View</a>  
         <a href ng-click="displayjobsmessagedelete4(detail.jobid,detail.jobtemp,<?php echo $emailid; ?>)" >Delete</a>  </td>
     </tr>
 
  </tbody>

  <tfoot>
 
      
<tr>
 <td colspan="5" class="footer"><h6 href ng-show="showLoadmore" ng-click='getPostsclick4()'><a href style="color:blue;text-decoration:none;">{{ buttonText }}</a></h6></td>
</tr>
</tfoot>
  
</table>       
  
      

 <div id="Layer2" style="position:fixed;text-align:left;left:auto;right:0px;top:auto;bottom:0px;width:27.7251%;height:294px;z-index:27;">
<iframe name="InlineFrame1" id="InlineFrame1" style="position:absolute;left:0px;top:1px;width:350px;height:292px;z-index:12;" ng-src="{{detailFrame}}"></iframe>
</div>
    </body>
</html>
