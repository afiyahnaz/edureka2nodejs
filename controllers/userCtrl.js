const userModel = require("../models/userModel");
const bcrypt  = require("bcrypt");


const  login = async (req,res) => {

    let data = req.body;
    try{
      
        let result = await userModel.findOne({
            email    : data.email, 
           
        });
        if (result === null) {
            res.status(200),
            res.send({
            status:false,
            message:"wrong username or password"
       });
        } else {
          let isValid =  await bcrypt.compare(data.password, result.password)
          if(isValid) {
            res.status(200),
            res.send({
            status:true,
             message:"login successfull"
          });
           } else {
            res.status(200),
            res.send({
            status:false,
            message:"wrong username or password"
       });
    }
}
    } catch (error) {
        res.status(500);
        res.send({
            status:false,
            error
        })
    }
}
const signUp = async  (req,res) => {
    let data =  req.body;
   
    try{ let salt  = await bcrypt.genSalt(15);
        const newPassword = await  bcrypt.hash(data.password,salt);
         //create a instance
    let newUser = new userModel({

        "fullName"       :   data.fullName,
        "email"          :   data.email,
        "mobileNumber"   :   data.mobileNumber,
        "password"       :   newPassword,
       })
       //use save method
       let result = await newUser.save();
        res.status(200),
        res.send({
            status:true,
            result,
        })

    }  catch (error) {
        res.status(500);
        res.send({
            status:false,
            error,
        });
    }
}
module.exports = {
    login,
    signUp
};