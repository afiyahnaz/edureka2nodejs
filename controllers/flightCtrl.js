const flightModel = require("../models/flightModel");


const home = ((req,res) =>{
    res.send("All Flights Home page");
    res.status(200);
});

const  getAllFlight = async (req,res)  => {
    try{
        let result = await flightModel.find();
        res.status(200);
        res.send({
            status:true,
            result,
        });

} catch ( error) {
    res.status(500);
        res.send({
        status: false,
        error,
        })
}
};


const  getFlightDetailsById = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await flightModel.findOne({_id:id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "Flight Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};
const getFlightByFlightNumber = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await flightModel.find({flightNumber : id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "Flight Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};

const getFlightByLocation = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await flightModel.find({location : id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "car Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};

const getFlightByAirlines = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await flightModel.find({airlines : id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "car Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};

const getFlightByPrice = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await flightModel.find({price : id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "car Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};


    const filterData = async (req,res) => {
   
        let { location, airlines, flightNumber, hPrice ,lPrice, sort,page} =  req.body;


        // sort ==> 1 ==> low to high
        // sort ==> -1 ==> high to low
        // lprice ==> 0
        // hprice ==>1000000000

        if(sort === undefined) {
            sort = 1;
        }
        
        if (page === undefined)  {
            page = 1;
        }
        
        let perPage = 2;
        let startIndex = page * perPage - perPage; //2
        let endIndex = page * perPage; //4
      
        let filter = {};
          if(location !== undefined) filter["location"]= location;
          if(airlines !== undefined) filter["airlines"]= airlines;
          if(flightNumber !== undefined)  filter["flightNumber"]  = flightNumber;
          if(hPrice !== undefined && lPrice !== undefined) 
          filter ["MinPrice"] = { $gte: lPrice, $lte: hPrice};
        //   console.log(filter);
          
        
        let result = await flightModel.find(filter , {
            airlines:1,
            location:1,
            MinPrice:1,
            image:1,
        }).sort({
            MinPrice : sort,
           
        });
        let newResult = result.slice(startIndex, endIndex);
;        res.status(200);
        res.send({
            status:true,
            result,
        });
       
    
    
    };
  


module.exports = {
    home,
    getAllFlight,
    getFlightDetailsById ,
    getFlightByFlightNumber,
    getFlightByLocation,
    getFlightByAirlines,
    getFlightByPrice,
    filterData


   
}