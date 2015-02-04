//------------------------------------------------------------------------------------------------
// Product Factory
//------------------------------------------------------------------------------------------------

mainMod.factory('productFactory',['$http','$q','$resource', function($http,$q,$resource){
    
    //use $http service in this factory / use also $q -service https://docs.angularjs.org/api/ng/service/$q
    
    var factory = {};

//-------------------------------------------- GET ---------------------------------------------- 
    
    factory.getProducts = function(scope){
    
        var deferred = $q.defer();
        factory.promise = deferred.promise;
        
        $http.get('/data').
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                console.log('error loading data');
            });
        
        return deferred.promise;
    }

//-------------------------------------------- POST ---------------------------------------------    
    
    factory.postProduct = function(data){
        
        return $resource('/data',{},{'post':{method:'POST'}}).post(data).$promise;
    }

//-------------------------------------------- PUT ----------------------------------------------

    factory.updateItem = function(index){
        
        
    }
    
//------------------------------------------- DELETE -------------------------------------------- 
    
    factory.deleteItem = function(index){
        
        var req = $resource('/data/',{id:index},{'delete':{method:'DELETE'}});
        return req.delete().$promise;
    }
    
    
    return factory;
}]);