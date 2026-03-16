const express=require("express");

// Creating a router    
const router=express.Router();

// importing a controller
const authController=require("../controllers/auth_controller")

// Defining the routes  
router.get("/",authController.home);
router.get("/register",authController.register);


module.exports=router;
