const User = require("../models/user-model");

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
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user: userCreated
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  home,
  register
};