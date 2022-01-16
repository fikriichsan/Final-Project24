const express = require("express");
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post("/add-user", UserController.createUser);
router.post("/login", UserController.loginUser);

module.exports = router;