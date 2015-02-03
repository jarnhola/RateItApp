var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost/rate-it',function(err,success){
    
    if(err){
        console.log(err + " check that your mongodb is running.");
    }
    else{
        console.log('We are connected to database');
    }
});

var Schema = mongoose.Schema;

var review = new Schema({
    type:String,
    item:String,
    from:String,
    date:String,
    rate:Number,
    opinion:String
});

var Review = mongoose.model('Review',review);

module.exports.Review = Review;