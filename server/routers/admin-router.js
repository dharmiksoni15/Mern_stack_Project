const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const getallUsers = require("../controllers/admin-controller");

// 👉 GET: /api/admin/users

router.get("/users", getallUsers);
console.log("Admin router working");

module.exports = router;