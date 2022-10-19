const express = require("express");
const paymentCtrl = require("../controllers/paymentCtrl");
const router = express.Router();





//location Routes
router.post("/api/payment/gen-order", paymentCtrl.getOrderId);


router.post("/api/payment/verify",paymentCtrl.verifyPayment);


module.exports = router;