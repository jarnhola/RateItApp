var express = require('express');
var router = express.Router();

//Following are REST app methods/routes

var dummy=[];

router.get('/types',function(req,res){
    
    var productTypes = {
        types:['Kulkuneuvo','Elintarvike','Kodintarvike','Ravintola']
    }
    res.send(productTypes);
    
});
/*
router.get('/',function(req,res){

    res.send(dummy);
});*/

router.get('/',function(req,res){
    req.queries.getReviews(req,res);
});

/*
router.post('/',function(req,res){
    
    dummy.push(req.body);
    res.send('Added to server array');
});*/

router.post('/',function(req,res){
    req.queries.addReview(req,res);
});

router.put('/',function(req,res){
    
    dummy.put
});

router.delete('/',function(req,res){
    
    dummy.splice(req.query.id,1);
    res.send("We are ok!");
});

module.exports = router;