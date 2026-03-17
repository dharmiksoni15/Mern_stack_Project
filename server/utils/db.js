const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.log("Database Connection Failed ❌");
    console.error(error.message);   // show real reason
    process.exit(0);
  }
};

module.exports = connectDb;