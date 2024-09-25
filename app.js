let express = require("express");

let studentRouting = require ("../server/router/studentRouter");
const employeesRoute =   require ("../server/router/employees");
let workerRouting =require ("./router/workerRouter");
let signupRouting = require("./router/signupRouter");
let treatementRouting = require("./router/treatementRouter");
let offerRouting = require("./router/offerRouter");
let appointmentRouting = require("./router/appointmentRouter")
let contactRouting = require("./router/conatctRouter")
let doctorRouting = require("./router/doctorRouter");

let cors=require("cors");
require("./dbconfig/dbcon");


let app=express();


app.use(express.json());
app.use(cors());
app.use("/student", studentRouting); 
app.use("/employees",employeesRoute);
app.use("/worker",workerRouting);
app.use("/signup",signupRouting);
app.use("/treatement",treatementRouting);
app.use("/offer",offerRouting);
app.use("/appointment",appointmentRouting)
app.use("/contactus",contactRouting)
app.use("/doctor",doctorRouting);



app.listen(4000,()=>console.log("server started"));

