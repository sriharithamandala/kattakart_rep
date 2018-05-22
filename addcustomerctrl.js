
app.controller("addcustomerCtrl", function($scope,$window,UpdateaddcustomerServiceinfo,toastr) {
    
    $scope.remarks={
        itemdesc:'',
        remark:''
    };
    
    
        $scope.addcustomer = {
         
            mobile:'',
            name:'',
            email:'',
            address:'',
            remarks:[], //store multiple remarks
           assigndate:''
    
        };
        //temp storage
        
    
    
        $scope.addcustomerCall = function(addcustomer){
            //push into remark list
           
            $scope.addcustomer.remarks.push($scope.remarks);
            
                 $scope.showloader = true;
            UpdateaddcustomerServiceinfo.addcustomer_Service(addcustomer).then(function(GetRsltInfo){
                        
                $scope.showloader = false;
    
                       if(GetRsltInfo.response_code == 0){
                           toastr.success('Successfully added details');
                           $window.location.reload();
                       }
                       else{
                            $scope.showloader = false;
                           toastr.error('Phone number already exits');   
                       }
                  },function(error){})
    
                     
        };
    });
    