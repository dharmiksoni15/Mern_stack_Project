const User=require("../models/user-model");
const Contact=require("../models/contact-model");

// getall users logic

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


// getall contacts logic

const getallContacts=async(req,res)=>{
try {
    const contacts=await Contact.find();
    console.log(contacts);
     if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No Contact Found"});
        }

    return res.status(200).json(contacts);
} catch (error) {
    next(error);
}
}

module.exports = {getallUsers,getallContacts};