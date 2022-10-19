const express = require("express");
const flightCtrl = require("../Controllers/flightCtrl");
const router = express.Router();




router.get('/api/flight',flightCtrl.home);
//location Routes
router.get('/api/AllFlightDetails', flightCtrl.getAllFlight);
//this above id is used in reactjs for finding location in Homewallpaper
router.get('/api/FlightDetailsById/:id',flightCtrl.getFlightDetailsById );


  
    router.get('/api/ByFlightNumber/:id',flightCtrl. getFlightByFlightNumber);

    router.get('/api/ByLocation/:id',flightCtrl.getFlightByLocation);

    router.get('/api/FlightByAirlines/:id',flightCtrl. getFlightByAirlines);

    router.get('/api/FlightByPrice/:id',flightCtrl.getFlightByPrice);

   router.post('/api/filterFlight',flightCtrl.filterData);


module.exports = router;