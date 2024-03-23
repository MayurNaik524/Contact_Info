const asyncHandle=require("express-async-handler");
const Contact=require("../model/model")
// @desc get all contact
// @route GET/contacts
// @acess public
const getContact=asyncHandle(async (req,res)=>{
    const contact=await Contact.find();
    res.status(200).json(contact);
});

// @desc create contact
// @route POST/contacts/:id
// @acess public
const createContact=asyncHandle(async (req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("Put all data");
    }
    const contact=await Contact.create({
        name,email,
    });
    res.status(201).json(contact);
});

// @desc update contact
// @route PUT/contacts/:id
// @acess public
const updateContact=asyncHandle(async(req,res)=>{
    const data={"msg":"update contact "};
    res.status(200).send(JSON.stringify(data));
});

// @desc get particular contact
// @route GET/contacts/:id
// @acess public
const getContactParticular=asyncHandle(async(req,res)=>{
    const datas=await Contact.findByIdAndDelete(req.params.id);
});


// @desc delete particular contact
// @route DELETE/contacts/:id
// @acess public
const deleteData=asyncHandle(async(req,res)=>{
    const datas=await Contact.findByIdAndDelete(req.params.id);
});

module.exports={deleteData,getContactParticular,getContact,createContact,updateContact};