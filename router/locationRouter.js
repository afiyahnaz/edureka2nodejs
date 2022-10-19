const express = require("express");
const locationCtrl = require("../controllers/locationCtrl");
const router = express.Router();





//location Routes
router.get('/api/getLocation',locationCtrl.getLocationList);
//this above id is used in reactjs for finding location in Homewallpaper


module.exports = router;