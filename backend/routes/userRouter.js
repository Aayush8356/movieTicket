const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controller/userController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.route("/login").post(loginUser);

router.post("/register", registerUser);

router.get("/current", validateToken, currentUser);
module.exports = router;
