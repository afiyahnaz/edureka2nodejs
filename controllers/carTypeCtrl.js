
const carTypeModel = require("../models/carTypeModel");

const getCarTypeList = async (req,res)  => {
    try{
        let result = await carTypeModel.find();
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


module.exports = {
    getCarTypeList

}
