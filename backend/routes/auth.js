let express = require('express');
let router = express.Router();
let userController = require("../controllers/userController");

router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;