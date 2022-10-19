const express = require("express");
const carTypeCtrl = require("../controllers/carTypeCtrl");
const router = express.Router();





//mealType Routes
router.get('/api/getCarTypes', carTypeCtrl.getCarTypeList);


module.exports = router;