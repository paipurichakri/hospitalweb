let express = require ("express");

let Signups = require("../modal/signupModel");

let signupRouting = express.Router();

signupRouting.get("/", async (req,res)=>{
    let user = await Signups.find();
    res.send(user);
})

signupRouting.post("/", async(req,res)=>{
    // try {
        let user = new Signups(req.body);
        let result = await user.save();
        res.send(result);
    // } catch (error) {
    //    console.log(error)
    //    res.status(400).send({status : 400 , message : error}) 
    // }

});


signupRouting.post("/login", async(req,res)=>{
    let { email,password } = req.body;
    let user = await Signups.findOne({email:email});
    if(!user){
        res.send("user not found");
    }
    else if(user.password===password){
        res.send("valid");
    }
    else{
        res.send("invalid");
    }
});


module.exports = signupRouting;