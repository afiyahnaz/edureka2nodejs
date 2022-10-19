const carModel = require("../models/carModel");


const home = ((req,res) =>{
    res.send("All cars Home page");
    res.status(200);
});

const getAllCars = async (req,res)  => {
    try{
        let result = await carModel.find();
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


const getCarDetailsById = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await carModel.findOne({_id:id});
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

const getByCarNumber = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await carModel.find({carNumber : id});
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
const getByCarName = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await carModel.find({name : id});
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

const getByCarLocation = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await carModel.find({location: id});
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

const getCarByPrice = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await carModel.find({price: id});
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
   
    let {  name,   persons, carNumber, location, hPrice ,lPrice, sort, page} =  req.body;


//    sort ==> 1 ==> low to high
//    sort ==> -1 ==> high to low
//    lprice ==> 0
//    hprice ==> 2000
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
    if(location !== undefined) filter["location"] = location;
    // if(carTypeId !== undefined) filter["carTypeId"] = carTypeId;
    if(name !== undefined) filter["name"]   = name;
    if(persons !== undefined) filter["persons"] = persons;
    if(carNumber !== undefined)  filter["carNumber"] = carNumber;
    if(hPrice !== undefined && lPrice !== undefined) 
    filter ["MinPrice"] = { $gte: lPrice, $lte: hPrice}; 

    // console.log(filter);
    let result = await  carModel.find(filter,{
        name:1,
        persons:1,
        location:1,
        MinPrice:1,
        image:1,
        
    }).sort({
        MinPrice: sort,
    });


    let newResult = result.slice(startIndex, endIndex);
    res.status(200);
    res.send({
        status:true,
        result,
    });
    

};

module.exports = {
    home,
    getAllCars,
    getCarDetailsById ,
    getByCarNumber,
    getByCarName,
    getByCarLocation ,
    getCarByPrice,
    filterData
}