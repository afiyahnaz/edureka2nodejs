const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const carSchema = new Schema({

    "name":{type:String, required: true},
    "location":{type:String, required: true},
    "carNumber":{type:String, required: true},
   "MinPrice":{type:Number, required: true},
   "persons":{type:String, required: true},
    "image"     :   {type: String},
 

});

module.exports = mongoose.model('car', carSchema,
                                    'car');