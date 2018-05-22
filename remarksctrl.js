app.controller("remarksCtrl", function($scope,$window,Updateremarksserviceinfo,toastr) {
    debugger;

    $scope.addRemarks = {
         mobile:'',
        itemdesc:'',
        remarks:'',
        assigndate: ''
        
    }

    $scope.remarksCall = function(addRemarks){
        debugger;
        $scope.showloader = true;
 Updateremarksserviceinfo.remarks_Service(addRemarks).then(function(GetRsltInfo){
                    debugger;
                     $scope.showloader = false;
                     if(GetRsltInfo.response_code == 0){
                       toastr.success('Remarks added successfully');
                        $window.location.reload();
                   }
                   else{
                        $scope.showloader = false;
                       toastr.error('phone number already exits'); 
                       
                   }
         },function(error){})


    };
});



 
