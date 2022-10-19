const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
         "name"       :   {type: String},
        "cityId"     :   {type: Number},
        "location" :   {type: String},
        "city"        :   {type: String},
        "countryName":   {type: String},
    

});

const LocationFlightModel = mongoose.model('locationFlight', //name
                                      LocationSchema,//schemaName
                                    'locationFlight');//collectionName


module.exports = LocationFlightModel;