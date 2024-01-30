const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controller/userController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

// router.post("/register", registerUser);

router.route("/current/:id").get(currentUser);
module.exports = router;
