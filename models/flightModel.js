const  mongoose = require('mongoose');
const Schema = mongoose.Schema;



const flightSchema = new Schema({

    
   
    location:{type: String, required : true },
    takeOff:{ type: String, required: true },
    airlines:{type: String, required : true},
    flightNumber:{type:String,required : true},
    MinPrice : {type:String, required: true},
      image       :   {type: String},

});



module.exports = mongoose.model('Flight',flightSchema,
'Flight');