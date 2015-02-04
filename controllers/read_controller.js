//------------------------------------------------------------------------------------------------
// Read Controller
//------------------------------------------------------------------------------------------------

//This is one syntax to create a controller, but might get broken is this is minified
mainMod.controller('ReadController', function($scope,$location,productFactory,$route){ //use the 'productFactory in this controller

    $scope.deleteProduct = function(index){
        console.log(index);

        productFactory.deleteItem(index).then(function(data){
            $scope.products.splice(index,1);
            //$route.reload();
        });
    }
    
    $scope.updateProduct = function(index){
        console.log(index);

        productFactory.updateItem(index).then(function(data){
            $scope.products.splice(index,1);
            //$route.reload();
        });
    }    
    
    //wait here that we get response from server
    //productFactory.getProducts().then(function(data){
    productFactory.getProducts().then(function(data){
        $scope.products = data.products;
    });
    
});