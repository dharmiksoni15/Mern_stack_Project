const express=require("express");

// Creating a router    
const router=express.Router();

// importing a controller
const authController=require("../controllers/auth_controller")

// get the validate middleware

const signupSchema=require("../validators/auth-validator");
const validate=require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");

// Defining the routes  
router.get("/",authController.home);
router.post("/register",validate(signupSchema),authController.register);
router.post("/login",authController.login);
router.get('/user',authMiddleware,authController.user);
module.exports=router;
