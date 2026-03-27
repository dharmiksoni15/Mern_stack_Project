const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const verifyAdmin = require("../middleware/admin-middleware");
const adminController = require("../controllers/admin-controller");

// GET ALL USERS
router.get("/users", authMiddleware, verifyAdmin, adminController.getallUsers);

// GET SINGLE USER BY ID
router.get("/users/:id", authMiddleware, verifyAdmin, adminController.getUserById);

// UPDATE USER BY ID
router.patch("/users/:id", authMiddleware, verifyAdmin, adminController.updateUserById);

// DELETE USER BY ID
router.delete("/users/delete/:id", authMiddleware, verifyAdmin, adminController.deleteUserById);

// GET ALL CONTACTS
router.get("/contacts", authMiddleware, verifyAdmin, adminController.getallContacts);

module.exports = router;