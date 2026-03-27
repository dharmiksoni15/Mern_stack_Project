const User=require("../models/user-model");
const Contact=require("../models/contact-model");

// getall users logic

const getallUsers = async (req, res) => {
  try {
    const users = await User.find();

    console.log("ADMIN USERS 👉", users); // 👈 check here

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// getAll contacts logic

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