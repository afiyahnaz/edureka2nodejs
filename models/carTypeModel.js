const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carTypeSchema = new Schema({
         "name"       :   {type: String},
         "image"       :   {type: String},
        "carTypeId"    :   {type: Number},
        "persons"  :      {type:String},

       
    

});

const carTypeModel = mongoose.model('cartype', //name
                                      carTypeSchema,//schemaName
                                    'cartypes');//collectionName


module.exports =carTypeModel;