const jwt = require("jsonwebtoken");

// 🔐 Authentication Middleware
const authMiddleware = async (req, res, next) => {
  // 👉 Step 1: Authorization header lo
  const authHeader = req.headers.authorization;

  // Example:
  // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

  // 👉 Step 2: Check karo header exist kare che ke nai
  // ane "Bearer " thi start thay che ke nai
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized, token missing",
    });
  }

  // 👉 Step 3: "Bearer " remove kari ne actual token levu
  // split(" ") thi array male: ["Bearer", "token"]
  const token = authHeader.split(" ")[1];

  // Debug mate:
  console.log("Token only:", token);

  try {
    // 👉 Step 4: Token verify karo using secret key
    const verifiedToken = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    );

    // 👉 Step 5: Verified data request ma attach karo
    // aa data aagal controllers ma use thai sake
    req.user = verifiedToken;
    req.userID = verifiedToken.userId;
    req.token = token;

    // 👉 Step 6: Next middleware / controller ne call karo
    next();
  } catch (error) {
    // 👉 Jo token invalid hoy to error return karo
    console.log("JWT Verify Error:", error.message);

    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;