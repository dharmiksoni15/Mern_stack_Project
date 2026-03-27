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


// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    // URL mathi user ni ID levani
    const id = req.params.id;

    // MongoDB mathi user delete karvo
    const deletedUser = await User.deleteOne({ _id: id });

    // Jo user na male to 404 aapvu
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Success response
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Delete User Error:", error);
    return res.status(500).json({ message: "Error deleting user" });
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

module.exports = {getallUsers,getallContacts,deleteUserById};