const express = require("express");
const locationFlightCtrl = require("../controllers/locationFlightCtrl");
const router = express.Router();





//location Routes
router.get('/api/getFlightLocation',locationFlightCtrl.getLocationList);
//this above id is used in reactjs for finding location in Homewallpaper


module.exports = router;