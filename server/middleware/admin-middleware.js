const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const verifyAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 🔴 Check header properly
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied, token missing" });
    }

    const token = authHeader.split(" ")[1];

    // 🔴 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // 🔴 Get user from DB
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 🔴 Check admin
    if (!user.isAdmin) {
      return res.status(403).json({ message: "Access forbidden: Admins only" });
    }

    // 🔴 Attach user
    req.user = user;

    next();

  } catch (error) {
    console.log("JWT ERROR 👉", error.message);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = verifyAdmin;