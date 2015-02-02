//------------------------------------------------------------------------------------------------
// Write Controller
//------------------------------------------------------------------------------------------------
// This is another syntax for creating controller (or facory/service)
// The minifier wont brake the code if you use this syntax
//------------------------------------------------------------------------------------------------

mainMod.controller('WriteController',['$scope','productFactory','$location',function($scope,productFactory,$location){
    
    // Deine your scope atributes always in object literal
    // See more: https://github.com/angular/angular.js/wiki/Understanding-Scopes
    $scope.product = {
        type:'',
        item:'',
        from:'',
        date:'',
        rate:'',
        opinion:'',        
        post_product:function(){            
            var promise = productFactory.postProduct($scope.product);
            promise.then(function(data){
                console.log(data);
                $location.path('/read');
            });
        }
    }
}]);