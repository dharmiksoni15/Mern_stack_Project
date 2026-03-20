// dotenv file import
require('dotenv').config();

// creating a server
const express = require("express");
const app = express();

// import router
const authRoutes = require("./routers/auth-router");
const contactRoute=require("./routers/contact-router");

const connectDb = require("./utils/db");
const errorMiddleware = require('./middleware/error-middleware');


// middleware
app.use(express.json());

// connect the router
app.use("/api/auth", authRoutes);
app.use("/api/form",contactRoute);

app.get("/", (req, res) => {
  res.send("Welcome Server Run Seccesfully!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// we check before the connection if error occuar then no connection
app.use(errorMiddleware);

const PORT = 3100;

connectDb().then(() => {
  // starting the server
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
