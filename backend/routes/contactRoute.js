const express=require("express");
const router=express.Router();
const {getContact,updateContact,deleteData,createContact,getContactParticular,}=require("../controller/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").get(getContactParticular);

router.route("/:id").delete(deleteData);



module.exports=router;