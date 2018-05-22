
app.controller("viewCustomerctrl", function($scope,$rootScope,$window,UpdateviewcustomerServiceInfo,toastr,UpdatesviewcustomerServiceInfo) {
    

UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function(GetRsltInfo){
                    
           
                   if(GetRsltInfo.response_code == 0){
                     $scope.viewcustomres =  GetRsltInfo.result_object;
                       //Jitender M R
                       //No need to loop through and calculate remarks lenght, as it can be done using customer.remarks.length
                       /*for(i=0; i<$scope.viewcustomres.length; i++){

                           $scope.viewcustomres[i].remarkslength =  $scope.viewcustomres[i].remarks.length;
                       }*/
                   }
                   else{
                       
                   }
                   
              },function(error){})


      $scope.showRemarks = function(deletecustomer){
          
          $scope.remarkslist = deletecustomer;
        $('#viewCustomer').modal('show');
    }



               $scope.delete = function(deletecustomer){
                   
                   $rootScope.customer = deletecustomer;
                   
               }
                $scope.deleteRow = function(deletecustomer){
      
       $scope.showloader = true;
    UpdatesviewcustomerServiceInfo.deleterow($rootScope.customer._id).then(function(GetRsltInfo){
                    
               
                     if(GetRsltInfo.response_code == 0){
                       toastr.success('Successfully Deleted');
                       UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function(GetRsltInfo){
                    
                     $scope.showloader = false;
                   if(GetRsltInfo.response_code == 0){
                     $scope.viewcustomres =  GetRsltInfo.result_object;
                     
                     
                   }
                   else{
                       
                   }
            
              },function(error){})
                   }
                   else{
                        $scope.showloader = false;
                       toastr.error('Phone number already exits');   
                   }                
                
                },function(error){});

        };
 
     $scope.ShowDelRemarkConfirmamtaion=function(delcustomerremark,remark){
            
     
         $scope.delRemark = remark;
         $scope.delcustomerremark=delcustomerremark;
         $("#deleteCustomerRemark").modal("show");
         $("#deleteCustomerRemark").css("z-index", "1500");
        
     };
     
    //Author Jitender M R
    //Date :17-05-2018
    //delete customer remark
    $scope.deleteRemark=function()
              {
                 
        UpdatesviewcustomerServiceInfo.deleteRemark($scope.delRemark._id).then(function(GetRsltInfo){
                    
               
                     if(GetRsltInfo.response_code == 0){
                       toastr.success('Successfully Deleted');
                       UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function(GetRsltInfo){
                    
                     $scope.showloader = false;
                   if(GetRsltInfo.response_code == 0){
                     $scope.viewcustomres =  GetRsltInfo.result_object;
                     for(i=0;i<$scope.viewcustomres.length;i++)
                     {
                         
                        if($scope.viewcustomres[i]._id===$scope.delcustomerremark._id)
                        {
                           $scope.remarkslist = $scope.viewcustomres[i];
                       
                                            
                           
                        }
                        
                     }
                    
                   }
                   else{
                       
                   }
            
              },function(error){})
                   }
                   else{
                        $scope.showloader = false;
                       toastr.error('Phone number already exits');   
                   }                
                
                },function(error){});
                  
              };
    
              
});




