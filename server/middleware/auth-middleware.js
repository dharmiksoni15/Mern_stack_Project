const jwt = require("jsonwebtoken");

const user = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    // 1. Authorization header mathi token levu
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized, Token not provided" });
    }
    console.log("token from middleware", token);

    // 2. Bearer remove karvu
    const jwtToken = token.replace("Bearer ", "").trim();

    // 3. Token verify karvu
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    // 4. Database mathi user find karvo
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    // 5. Request ma user data attach karvu
    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
