app.factory('UpdatesviewcustomerServiceInfo',function ($http) {
    var webServiceUrl   = "http://13.126.231.152:8000/";
     return{
       deleterow : function(customer){

            debugger;
            var promise = $http.delete(webServiceUrl+'deleteCustomer/'+customer).then(function(response) {
                debugger;
                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            });
            return promise;
        },
        //Author:Jitender M R
        //Date :17-05-2018
        //Service method to delete remark from customer
        deleteRemark  :function(remarks){
            var promise = $http.delete(webServiceUrl+'deleteRemarks/'+remarks).then(function(response) {
                return response.data;
            }, function (error) {

            });
            return promise;
        }
    }
     


});


            