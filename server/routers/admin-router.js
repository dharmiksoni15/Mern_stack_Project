const express = require("express");

const authMiddleware=require("../middleware/auth-middleware");
const adminController=require("../controllers/admin-controller")

const router = express.Router();

const { getallUsers, getallContacts } = require("../controllers/admin-controller");
const verifyAdmin = require("../middleware/admin-middleware");

// 👉 GET: /api/admin/users
router.get("/users",authMiddleware,verifyAdmin, adminController.getallUsers);

router.delete("/users/delete/:id",authMiddleware,verifyAdmin,adminController.deleteUserById);

// 👉 GET: /api/admin/contacts
router.get("/contacts", authMiddleware,verifyAdmin,adminController.getallContacts);

console.log("✅ Admin router working");

module.exports = router;