var db = require('./database').Review;

//Use this for store new user for our application
module.exports.addReview = function(req,res){
    
    var review = new db();
    review.type = req.body.type;
    review.item = req.body.item;
    review.from = req.body.from;
    review.date = req.body.date;
    review.rate = req.body.rate;
    review.opinion = req.body.opinion;
    
    //Store model in database
    review.save(function(err){
        if(err){
            res.send({status:'Error'})
        }
        else{
            console.log("ok");
            res.send({status:'Ok'});
        }
    });
}

module.exports.getReviews = function(req,res){
    
    db.find({},function(err,data){
        
        if(err){
            console.log('error fetching user data');
            res.send('error');
        }
        else{
            console.log(data);
            res.send({products:data});
        }
    });
    /*
    db.find({}).exec(function(err,data){
        console.log("res.send({products:data})");
        res.send({products:data});
    });*/
}