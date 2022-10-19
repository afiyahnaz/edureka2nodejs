const express = require("express");
const carLocationCtrl = require("../Controllers/carLocationCtrl");
const router = express.Router();




router.get('/api',carLocationCtrl.home);
//location Routes
router.get('/api/AllCarDetails', carLocationCtrl.getAllCars);
//this above id is used in reactjs for finding location in Homewallpaper
router.get('/api/CarDetailsById/:id',carLocationCtrl.getCarDetailsById );

router.get('/api/ByCarNumber/:id',carLocationCtrl.getByCarNumber);

router.get('/api/ByCarName/:id',carLocationCtrl.getByCarName);

router.get('/api/ByCarLocation/:id',carLocationCtrl.getByCarLocation);


router.get('/api/CarByPrice/:id',carLocationCtrl.getCarByPrice);



router.post('/api/filtercar',carLocationCtrl.filterData);
module.exports = router;