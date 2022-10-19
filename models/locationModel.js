const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
         "name"       :   {type: String},
        "cityId"     :   {type: Number},
        "locationId" :   {type: Number},
        "city"        :   {type: String},
        "countryName":   {type: String},
    

});

const LocationModel = mongoose.model('location', //name
                                      LocationSchema,//schemaName
                                    'location');//collectionName


module.exports = LocationModel;