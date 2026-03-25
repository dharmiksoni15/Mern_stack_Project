const User=require("../models/user-model");

const getallUsers=async(req,res)=>{
    try {
        const users=await User.find().select("-password");

        if(!users || users.length === 0){
            return res.status(404).json({message:"No User Found"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:"Error Fetching users"});
        next(error);
    }
};

module.exports = getallUsers;