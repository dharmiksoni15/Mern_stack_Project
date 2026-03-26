const express = require("express");
const router = express.Router();

const { getallUsers, getallContacts } = require("../controllers/admin-controller");
const verifyAdmin = require("../middleware/admin-middleware");

// 👉 GET: /api/admin/users
router.get("/users", verifyAdmin, getallUsers);

// 👉 GET: /api/admin/contacts
router.get("/contacts", verifyAdmin, getallContacts);

console.log("✅ Admin router working");

module.exports = router;