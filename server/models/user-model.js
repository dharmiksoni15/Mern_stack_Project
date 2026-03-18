const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// secure the password with the bcrypt
// pre method ensures before save the data it runs async function

userSchema.pre("save", async function (next) {
  console.log("pre method", this);

  const user = this;
  // if password was not modified it means password was already bcrypt
  if (!user.isModified("password")) {
    next();
  }

  //  if password was first time created or modified
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// Json Web token

userSchema.methods.generateToken = async function () {
  console.log("JWT KEY:", process.env.JWT_SECRET_KEY);
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
