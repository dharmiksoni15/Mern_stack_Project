const express=require("express");

// Creating a router    
const router=express.Router();

// importing a controller
const authController=require("../controllers/auth_controller")

// get the validate middleware

const signupSchema=require("../validators/auth-validator");
const validate=require("../middleware/validate-middleware");

// Defining the routes  
router.get("/",authController.home);
router.post("/register",validate(signupSchema),authController.register);
router.post("/login",authController.login);


module.exports=router;
