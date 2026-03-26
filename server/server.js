// dotenv file import
require("dotenv").config();

// creating a server
const express = require("express");
const cors = require("cors");
const app = express();

// import routers
const authRoutes = require("./routers/auth-router");
const contactRoute = require("./routers/contact-router");
const adminRoutes = require("./routers/admin-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// handling cors policy issue
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoutes); // ✅ ONLY ONCE

console.log("✅ Admin route loaded");

// home route
app.get("/", (req, res) => {
  res.send("Welcome Server Run Successfully!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// error middleware
app.use(errorMiddleware);

// start server
const PORT = 3100;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 server is running on port ${PORT}`);
  });
});