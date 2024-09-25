let express = require("express");
let cors=require("cors");


let mysqlstudentRouting = require("./router/mysqlstudentRouter");


let app=express();
app.use(express.json());
app.use(cors());
app.use("/student",mysqlstudentRouting);

app.listen(4000,()=>console.log("server started"));

