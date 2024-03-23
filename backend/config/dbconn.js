const mongoose=require("mongoose");

const connectDB=async ()=>{
    try{
            const connect=await mongoose.connect(process.env.CONNECTION_STRING);
            console.log("DB Connected:",connect.connection.host);
    }
    catch(e){
        console.log(e);
        process.exit();
    }
}

module.exports=connectDB;