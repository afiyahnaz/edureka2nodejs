const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//registering created routes
const carLocationRouter = require('./router/carLocationRouter');
const carTypeRouter   = require('./router/carTypeRouter');
const flightRouter   = require('./router/flightRouter');
const paymentRouter   = require('./router/paymentRouter');
const locationRouter = require('./router/locationRouter');
const locationFlightrouter = require('./router/locationFlightRouter');
const userRouter = require('./router/userRouter');
const config = require('./config/index');




const app = express();


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`);
});

app.use(cors()); //enable cors

//to enable/access post data (body-parser)
app.use(express.json()); //convert string JSON to pure JSON
app.use(express.urlencoded({extended:false})); //normal post data to json data


//connecting to mongoose
mongoose.connect(config.dbConstrFlight,(err,result) => {
    if(!err)   console.log('connected to db');
    else       console.log(err);
});



app.use('', carLocationRouter);
app.use('',carTypeRouter);
app.use('',flightRouter);
app.use('', paymentRouter);
app.use('',userRouter);
app.use('',locationRouter);
app.use('',locationFlightrouter);


