const User = require("../models/user-model");
const bcrypt=require("bcryptjs");

// Home Route
const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to Home Controller" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Register Route
const register = async (req, res) => {
  try {

    console.log("BODY:", req.body);

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400) .json({ message: "Email already exists" });
    }

    // hash the password

    // const saltRound=10;
    // const hash_password = await bcrypt.hash(password,saltRound);


    const userCreated = await User.create({
      username,
      email,
      phone,
      password
    });

    res.status(201).json({
      message: "User Registered Successfully",
        token: await userCreated.generateToken(),
      userID:userCreated._id.toString(),
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// User Login Logic

const login=async(req,res)=>{
try {
  const {email,password}=req.body;

  const userExist=await User.findOne({email});
  console.log(userExist);
  

  if(!userExist){
     return res.status(400) .json({ message: "Invalid Credentials" });
  }

  const user=await bcrypt.compare(password, userExist.password);

  if(user){
     res.status(200).json({
      message: "User Login Successfully",
        token: await userExist.generateToken(),
      userID:userExist._id.toString(),
    });
  }  
  else{
    res.status(401).json({ message: "Invalid email or password" });
  }


} catch (error) {
   res.status(500).json({ message: "Server Error" });
}
}

module.exports = {
  home,
  register,
  login
};