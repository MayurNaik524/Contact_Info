const express=require("express");
const app=express();
const cors=require('cors');
require("dotenv").config()
const cowsay=require("cowsay");
const errorHandler = require("./Middleware/errorHandler.js");
const connectDB = require("./config/dbconn.js");

app.use(cors());

PORT=process.env.PORT;  
connectDB();
app.listen(PORT,()=>{
    //Puts O/P as cow saying
    console.log(cowsay.say({"text":"Server connected"}));
})
app.use(errorHandler);
app.use(express.json());
app.use("/contacts",require("./routes/contactRoute.js"));
