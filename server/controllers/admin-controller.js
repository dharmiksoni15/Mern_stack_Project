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


// GET SINGLE USER BY ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id; // URL mathi id levu

    const user = await User.findById(id).select("-password"); 
    // password hide karva mate

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserById:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



// UPDATE USER BY ID
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updatedUserData,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log("Error in updateUserById:", error);
    return res.status(500).json({ message: "Internal server error" });
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

module.exports = {getallUsers,getallContacts,deleteUserById,updateUserById,getUserById};
