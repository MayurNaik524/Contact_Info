const {constants}=require("../constant")
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;
    switch(statusCode){
        case 400:res.json({title:"Validation Fail",message:err.message,stackTrace:err.stackTrace});
                 break;
        case 404:res.json({title:"Not Found",message:err.message,stackTrace:err.stackTrace});
                 break;
        case constants.VALIDATION_ERROR:res.json({title:"Not Found",message:err.message,stackTrace:err.stackTrace});
                 break;
        
    }

    res.json({title:"Not Found",message:err.message,stackTrace:err.stackTrace});
}

module.exports=errorHandler;