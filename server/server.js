// dotenv file import
require('dotenv').config();

// creating a server
const express = require("express");
const app = express();

// import router
const authRoutes = require("./routers/auth-router");

const connectDb = require("./utils/db");


// middleware
app.use(express.json());

// connect the router
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome Server Run Seccesfully!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

const PORT = 3100;

connectDb().then(() => {
  // starting the server
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
