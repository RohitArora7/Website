
  
  
  var app = angular.module("myApp", ["ngRoute" ,"ngSanitize" , "ngCookies","ui.router",'angularUtils.directives.dirPagination','ngStorage'] );



app.config(function($routeProvider ,$locationProvider ) {
    $routeProvider
    .when("/", {
        templateUrl : "displayjobs.php",
        controller : "DbController"
		 
    })
	
     .when("/allmessage", {
        templateUrl : "home.php",
        controller : "DbController"
		 
    })   
        
        
	.when("/jobgive", {
        templateUrl : "enterwork.html",
	controller : "DbController"
    })

        .when("/project", {
        templateUrl : "enterworkdisplay.html",
	controller : "DbController"
    })


        .when("/projectmessage", {
        templateUrl : "projectmessage.php",
	controller : "DbController"
    })

   .when("/enterworkdisplayfull", {
        templateUrl : "enterworkdisplayfull.html",
	controller : "DbController"
    })

   .when("/enterworkedit", {
        templateUrl : "enterworkedit.html",
	controller : "DbController"
    })





.when("/jobwant", {
        templateUrl : "enterwant.html",
	controller : "DbController"
    })


.when("/projectjob", {
        templateUrl : "enterwantdisplay.html",
	controller : "DbController"
    })

.when("/enterwantdisplayfull", {
        templateUrl : "enterwantdisplayfull.html",
	controller : "DbController"
    })

   .when("/enterwantedit", {
        templateUrl : "enterwantedit.html",
	controller : "DbController"
    })










.when("/jobsavailable", {
        templateUrl : "displayjobs.php",
	controller : "DbController"
    })



.when("/displayjobsmessage", {
        templateUrl : "displayjobsmessage.php",
	controller : "DbController"
        
        
     })








.when("/displayemployee", {
        templateUrl : "displayemployee.php",
	controller : "DbController"
    })


.when("/displayemployeemessage", {
        templateUrl : "displayemployeemessage.php",
	controller : "DbController"
    })



.when("/jobprofilemessage", {
        templateUrl : "jobprofilemessage.php",
	controller : "DbController"
    })




.when("/profileview2", {
        templateUrl : "profileview2.php",
	controller : "DbController"
    })


.when("/blockuser", {
        templateUrl : "blockuserdisplay.php",
	controller : "DbController"
    })


.when("/displayjobsfulll", {
        templateUrl : "displayjobsfull.php",
	controller : "DbController"
    })

.when("/displayemployeefulll", {
        templateUrl : "displayemployeefull.php",
	controller : "DbController"
    })



.otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });
	
	
	
});


app.controller("DbController",['$templateCache','$sce','$window','$interval','$state','$route','$rootScope','$scope','$http','$location','myService','$localStorage' , function($templateCache,$sce,$window,$interval,$state,$route,$rootScope,$scope,$http,$location,myService,$localStorage){




 $scope.names = ["Web Developer", "Software Developer", "IOS Developer"];


$scope.show_form = true;

$scope.formToggle =function()
{
$('#empForm').slideToggle();
$('#editForm').css('display', 'none');
}


$scope.insertInfo = function(info){
$http.post('databaseFiles/insertDetails.php',{"pname":info.name,"pcat":info.pc,"pdur":info.pd,"pdes":info.pdes,"pd1":info.pd1,"pd2":info.pd2,"pd3":info.pd3}).success(function(data){
if (data == true) {

  $location.path("/project");
}
});
}



$scope.getInfo = function()
{
$http.post('databaseFiles/empDetails.php').success(function(data){
$scope.details = data;
});
}






$scope.showInfo = function(info)
{
$localStorage.gameData = info;
$location.path("/enterworkdisplayfull");
}

$scope.showInfoagain = function()
{
$scope.currentUser = $localStorage.gameData;
}



$scope.editInfo = function(info)
{
$localStorage.gameData = info;
$location.path("/enterworkedit");
}

$scope.editInfoagain = function()
{
$scope.currentUser = $localStorage.gameData;
}








$scope.UpdateInfo = function(info){
$http.post('databaseFiles/updateDetails.php',{"pid":info.id,"pname":info.pname,"pcat":info.pcat,"pdur":info.pdur,"pdes":info.pdes,"pd1":info.ppay,"pd2":info.ploc,"pd3":info.pnop}).success(function(data){

if (data == true) {
$location.path("/project");   

}
});
}





$scope.deleteInfo = function(info){
$http.post('databaseFiles/deleteDetails.php',{"del_id":info.id}).success(function(data){
if (data == true) {
$scope.getInfo();
}
});
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////


//create job profile


$scope.insertInfowant = function(info){
$http.post('databaseFiles/insertDetailswant.php',{"pname":info.name,"pcat":info.pc,"pdur":info.pd,"pdes":info.pdes}).success(function(data){
if (data == true) {
  $location.path("/projectjob");
}
});
}
  

$scope.getInfowant = function()
{
$http.post('databaseFiles/empDetailswant.php').success(function(datawant){
$scope.detailswant = datawant;
});
}





$scope.showInfowant = function(info)
{
$localStorage.gameData = info;
$location.path("/enterwantdisplayfull");
}

$scope.showInfoagainwant = function()
{
$scope.currentUserwant = $localStorage.gameData;
}





$scope.editInfowant = function(info)
{
$localStorage.gameData = info;
$location.path("/enterwantedit");
}

$scope.editInfoagainwant = function()
{
$scope.currentUserwant = $localStorage.gameData;
}



        
$scope.UpdateInfowant = function(info){
$http.post('databaseFiles/updateDetailswant.php',{"pid":info.id,"pname":info.pname,"pcat":info.pcat,"pdur":info.pdur,"pdes":info.pdes}).success(function(data){

if (data == true) {
$location.path("/projectjob");   
}
});
}



$scope.deleteInfowant = function(info){
$http.post('databaseFiles/deleteDetailswant.php',{"del_id":info.id}).success(function(data){
if (data == true) {
$scope.getInfowant();
}
});
}




$scope.alertfunction =function()
{

}



//display all jobs except user login waste
getJobswant();
function getJobswant(){
                                                                                                                                    // Sending request to EmpDetails.php files 
$http.post('databaseFiles/empDetailswantjobs.php').success(function(datawantjob){
// Stored the returned data into scope 
$scope.detailswantjob = datawantjob;
});
}

//---------------------------------------------------------------------------------------------------

$scope.profileviewpass=function(info)
{
$http.post('profileview.php',{pname:info}).success(function(data){
if (data == true) {
//$('#empForm').css('display', 'none');
 //$window.location.href = '/enterworkdisplay.html';
  console.log($scope);
  $location.path("/profileview2");
  
}
});
}








blockuser();
function blockuser(){
                                                                                                                                    // Sending request to EmpDetails.php files 
$http.post('blockuserdetails.php').success(function(data){
// Stored the returned data into scope 
$scope.detailsblock = data;
});
}
//*******************************NOTIFICTION*****************************


$scope.greeting=' ';
$scope.greeting2=' ';
$scope.greeting3=' ';
$scope.greeting4=' ';

$scope.noti= function()
{
    
$http.post('noti1.php').success(function(data)
{

$scope.nameexp = data;

$scope.$watch("nameexp", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting = newValue;
    }
  });

});

                                                                //*********2
$http.post('noti2.php').success(function(data)
{

$scope.nameexp2 = data;

$scope.$watch("nameexp2", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting2 = newValue;
    }
  });

});

                                                                //*********3
$http.post('noti3.php').success(function(data)
{

$scope.nameexp3 = data;

$scope.$watch("nameexp3", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting3 = newValue;
    }
  });

});

                                                                //*********4
$http.post('noti4.php').success(function(data)
{

$scope.nameexp4 = data;

$scope.$watch("nameexp4", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting4 = newValue;
    }
  });

});






};

var stopnoti;
$scope.notificationcallevery = function()
{
    if ( angular.isDefined(stopnoti) ) return;
    stopnoti=$interval(function() {

$scope.noti();

      }, 3000);
};       




$scope.stopFightstopnoti = function() {
          if (angular.isDefined(stopnoti)) {
            $interval.cancel(stopnoti);
            stopnoti= undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFightstopnoti();
        });




$scope.notificationcall=function()
{
   $scope.noti(); 
   $scope.notificationcallevery();
   
};







/////////////___________//////////////////////______________/////////////////__111111111111

$scope.one = 0;
$scope.two = 0;
$scope.three = 0;


//$scope.nameexp5='';

$scope.displayjobsbackk=function()
{
$scope.three+=1;

$http.post('displayjobsback.php').success(function(data)
{

$scope.nameexp5= data;

});

}


$scope.$watch("nameexp5", function(newValue, oldValue) {
         $scope.two+=1;
         $scope.displayjobsback = newValue;
     }, true);




var stop5;
$scope.callmedisplayjobs = function()
{
    if ( angular.isDefined(stop5) ) return;
    
 stop5 =$interval(function() {

      $scope.displayjobsbackk();  
       
 }, 3000);
};       




$scope.stopFight5 = function() {
          if (angular.isDefined(stop5)) {
            $interval.cancel(stop5);
            stop5 = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight5();
        });




$scope.callmebdisplayjobs=function()
{
    
   $scope.displayjobsbackk();
   $scope.callmedisplayjobs();
    
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



$scope.displayjobsfull=function(info)
{
    
$localStorage.gameData = info;
$location.path("/displayjobsfulll");

};

$scope.displayjobsfullcallme=function()
{
    $scope.desiredLocation =  $localStorage.gameData;
          
     
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






/////////////___________//////////////////////______________/////////////////__222222222222222

$scope.displayemployeebackk=function()
{
$scope.three+=1;

$http.post('displayemployeeback.php').success(function(data)
{

$scope.nameexp6= data;

});

}


$scope.$watch("nameexp6", function(newValue, oldValue) {
$scope.two+=1;    
$scope.displayemployeeback = newValue;
    
  },true);


var stop6;
$scope.callmedisplayemployee = function()
{
    if ( angular.isDefined(stop6) ) return;
    
 stop6 =$interval(function() {

       
      $scope.displayemployeebackk();
      }, 3000);
};       




$scope.stopFight6 = function() {
          if (angular.isDefined(stop6)) {
            $interval.cancel(stop6);
            stop6 = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight6();
        });




$scope.callmebdisplayemployee=function()
{
    
   $scope.displayemployeebackk();
   $scope.callmedisplayemployee();
    
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



$scope.displayemployeefull=function(info)
{
    
$localStorage.gameData = info;
$location.path("/displayemployeefulll");

};

$scope.displayemployeefullcallme=function()
{
    $scope.desiredLocation =  $localStorage.gameData;
          
     
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++











  $scope.currentPage = 1;
  $scope.pageSize = 2;



 


//____________________________11111111111111111111111_________________________displayjobmessage.php_______________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________


            // Variables
            $scope.showLoadmore ;
            $scope.row = 0;
            $scope.rowperpage = 2;
            $scope.rowtemp=0;
            $scope.buttonText = "Load More";
            
            

$scope.inc = 0;   //regular
$scope.inccc = 0; //message
$scope.incc=0;    //first   
   
   
   
$scope.getdisplay = function(){
  $scope.inccc+=1;
  
$http.post('getdata.php').success(function(data){
     
      $scope.posts = data;
      $scope.showLoadmore = true; 

});
};

$scope.getupdate = function(){
    
         $http.post('sqlmessageresolve.php').success(function(data)
         {
           if(data==true)  
           {
            $scope.getdisplay();   
           }
         });

};

$scope.getsqlmessage = function()
{
 $http.post('sqlmessage.php').success(function(data){
   if (data==true) 
   {
   $scope.getupdate(); 
   }
 
});
};

var stop;
$scope.callme = function()
{
    if ( angular.isDefined(stop) ) return;
    
 stop =$interval(function() {

       $scope.inc+=1;
      $scope.getsqlmessage();
      }, 2500);
};       

//Fetch data/////////////////////////////////////////////////////////////
$scope.getPosts = function(){
$scope.callme();  
$http.post('getdatatemp.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==true) {

$scope.getdisplay();

}

});

};

$scope.getPostsclick = function(){
$scope.rowtemp+=$scope.rowperpage;    
$scope.rowperpage+=2;                
$http.post('getdatatemp.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==false) 
{
$scope.showLoadmore = false;
}
else
{
$scope.getdisplay();    
}
});
};

$scope.stopFight = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight();
        });




 
$scope.callmeb=function()
{
    
    $scope.incc+=1;
    $scope.getPosts();
    
}


        




//delete message
$scope.displayjobsmessagedelete = function(a,b,c)
{
    $http.post('deletemessage.php',{a:a,b:b,c:c}).success(function(data){
if (data==true) 
{
$scope.getdisplay();  
}
});
};

//message session
$scope.displayjobsmessageview = function(a,b,c,d)
{
    $http.post('messagetemp.php',{a:a,b:b,c:c,d:d}).success(function(data){
if (data==true) 
{
itemDetail('message.php');
}
});
    
};
//view notification
$scope.displayjobsmessagenotification = function(a,b,c)
{
    $http.post('view_notification2.php',{a:a,b:b,c:c});
};
  
  
  

$scope.profileviewjob=function(info)
{

$http.post('jobview.php',{pname:info}).success(function(data){


$localStorage.gameData = data;
$location.path("/displayjobsfulll");


});
};

  
//____________________________22222222222222________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________

$scope.getdisplay2 = function(){
  $scope.inccc+=1;
  
$http.post('getdata2.php').success(function(data){
     
      $scope.posts = data;
      $scope.showLoadmore = true; 

});
};

$scope.getupdate2 = function(){
    
         $http.post('sqlmessageresolve2.php').success(function(data)
         {
           if(data==true)  
           {
            $scope.getdisplay2();   
           }
         });

};

$scope.getsqlmessage2 = function()
{
 $http.post('sqlmessage2.php').success(function(data){
   if (data==true) 
   {
   $scope.getupdate2(); 
   }
 
});
};

var stop2;
$scope.callme2 = function()
{
    if ( angular.isDefined(stop2) ) return;
    
 stop2 =$interval(function() {

       $scope.inc+=1;
      $scope.getsqlmessage2();
      }, 2500);
};       

//Fetch data/////////////////////////////////////////////////////////////
$scope.getPosts2 = function(){
$scope.callme2();  
$http.post('getdatatemp2.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==true) {

$scope.getdisplay2();

}

});

};

$scope.getPostsclick2 = function(){
$scope.rowtemp+=$scope.rowperpage;    
$scope.rowperpage+=2;                
$http.post('getdatatemp2.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==false) 
{
$scope.showLoadmore = false;
}
else
{
$scope.getdisplay2();    
}
});
};

$scope.stopFight2 = function() {
          if (angular.isDefined(stop2)) {
            $interval.cancel(stop2);
            stop2 = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight2();
        });




 
$scope.callmeb2=function()
{
    
    $scope.incc+=1;
    $scope.getPosts2();
    
}


        

//delete message
$scope.displayjobsmessagedelete2 = function(a,b,c)
{
    $http.post('deletemessage3.php',{a:a,b:b,c:c}).success(function(data){
if (data==true) 
{
$scope.getdisplay2();  
}
});
};

//message session
$scope.displayjobsmessageview2 = function(a,b,c,d)
{
    $http.post('messagetemp2.php',{a:a,b:b,c:c,d:d}).success(function(data){
if (data==true) 
{
itemDetail('message3.php');
}
});
    
};
//view notification
$scope.displayjobsmessagenotification2 = function(a,b,c)
{
    $http.post('view_notification4.php',{a:a,b:b,c:c});
}    ;



$scope.profileviewemployee=function(info)
{

$http.post('employeeview.php',{pname:info}).success(function(data){


$localStorage.gameData = data;
$location.path("/displayemployeefulll");


});
};



//____________________________33333333333333________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________




   
   
$scope.getdisplay3 = function(){
  $scope.inccc+=1;
  
$http.post('getdata3.php').success(function(data){
     
      $scope.posts = data;
      $scope.showLoadmore = true; 

});
};

$scope.getupdate3 = function(){
    
         $http.post('sqlmessageresolve3.php').success(function(data)
         {
           if(data==true)  
           {
            $scope.getdisplay3();   
           }
         });

};

$scope.getsqlmessage3 = function()
{
 $http.post('sqlmessage3.php').success(function(data){
   if (data==true) 
   {
   $scope.getupdate3(); 
   }
 
});
};

var stop3;
$scope.callme3 = function()
{
    if ( angular.isDefined(stop3) ) return;
    
 stop3 =$interval(function() {

       $scope.inc+=1;
      $scope.getsqlmessage3();
      }, 2500);
};       

//Fetch data/////////////////////////////////////////////////////////////
$scope.getPosts3 = function(){
$scope.callme3();  
$http.post('getdatatemp3.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==true) {

$scope.getdisplay3();

}

});

};

$scope.getPostsclick3 = function(){
$scope.rowtemp+=$scope.rowperpage;    
$scope.rowperpage+=2;                
$http.post('getdatatemp3.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==false) 
{
$scope.showLoadmore = false;
}
else
{
$scope.getdisplay3();    
}
});
};

$scope.stopFight3 = function() {
          if (angular.isDefined(stop3)) {
            $interval.cancel(stop3);
            stop3 = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight3();
        });




 
$scope.callmeb3=function()
{
    
    $scope.incc+=1;
    $scope.getPosts3();
    
}


        

//delete message
$scope.displayjobsmessagedelete3 = function(a,b,c)
{
    $http.post('deletemessage2.php',{a:a,b:b,c:c}).success(function(data){
if (data==true) 
{
$scope.getdisplay3();  
}
});
};

//message session
$scope.displayjobsmessageview3 = function(a,b,c,d)
{
    $http.post('messagetemp3.php',{a:a,b:b,c:c,d:d}).success(function(data){
if (data==true) 
{
itemDetail('message2.php');
}
});
    
};
//view notification
$scope.displayjobsmessagenotification3 = function(a,b,c)
{
    $http.post('view_notification.php',{a:a,b:b,c:c});
}    ;





//____________________________444444444444________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________





$scope.getdisplay4 = function(){
  $scope.inccc+=1;
  
$http.post('getdata4.php').success(function(data){
     
      $scope.posts = data;
      $scope.showLoadmore = true; 

});
};

$scope.getupdate4 = function(){
    
         $http.post('sqlmessageresolve4.php').success(function(data)
         {
           if(data==true)  
           {
            $scope.getdisplay4();   
           }
         });

};

$scope.getsqlmessage4 = function()
{
 $http.post('sqlmessage4.php').success(function(data){
   if (data==true) 
   {
   $scope.getupdate4(); 
   }
 
});
};

var stop4;
$scope.callme4 = function()
{
    if ( angular.isDefined(stop4) ) return;
    
 stop4 =$interval(function() {

       $scope.inc+=1;
      $scope.getsqlmessage4();
      }, 2500);
};       

//Fetch data/////////////////////////////////////////////////////////////
$scope.getPosts4 = function(){
$scope.callme4();  
$http.post('getdatatemp4.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==true) {

$scope.getdisplay4();

}

});

};

$scope.getPostsclick4 = function(){
$scope.rowtemp+=$scope.rowperpage;    
$scope.rowperpage+=2;                
$http.post('getdatatemp4.php',{row:$scope.row,rowperpage:$scope.rowperpage,temp:$scope.rowtemp}).success(function(data){
if (data==false) 
{
$scope.showLoadmore = false;
}
else
{
$scope.getdisplay4();    
}
});
};

$scope.stopFight4 = function() {
          if (angular.isDefined(stop4)) {
            $interval.cancel(stop4);
            stop4 = undefined;
          }
        };



  $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight4();
        });




 
$scope.callmeb4=function()
{
    
    $scope.incc+=1;
    $scope.getPosts4();
    
}


        

//delete message
$scope.displayjobsmessagedelete4 = function(a,b,c)
{
    $http.post('deletemessage4.php',{a:a,b:b,c:c}).success(function(data){
if (data==true) 
{
$scope.getdisplay4();  
}
});
};

//message session
$scope.displayjobsmessageview4 = function(a,b,c,d)
{
    $http.post('messagetemp4.php',{a:a,b:b,c:c,d:d}).success(function(data){
if (data==true) 
{
itemDetail('message4.php');
}
});
    
};
//view notification
$scope.displayjobsmessagenotification4 = function(a,b,c)
{
    $http.post('view_notification3.php',{a:a,b:b,c:c});
}    ;







//inline frame/////------------------------------------------------------------
function itemDetail(a)
{
   $scope.detailFrame = a;
        reload();
    
};
///////////////////-------------------------------------------------------------
    





}]);
  


app.directive('hmRead', function () {
    return {
    	restrict:'AE',
    	scope:{
    		hmtext : '@',
    		hmlimit : '@',
    		hmfulltext:'@',
            hmMoreText:'@',
            hmLessText:'@',
            hmMoreClass:'@',
            hmLessClass:'@'
    	},
        templateUrl: 'template.html',
        controller : function($scope){
        	  $scope.toggleValue=function(){

                    if($scope.hmfulltext == true)
                        $scope.hmfulltext=false;
                    else if($scope.hmfulltext == false)
                        $scope.hmfulltext=true;
                    else
                        $scope.hmfulltext=true;
              }        
        }
    };
});




app.factory('myService', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});

