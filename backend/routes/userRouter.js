const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controller/userController");
const Users = require("../models/userModel");

const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

// router.post("/register", registerUser);

router.route("/current/:id").get(currentUser);

const meUser = async (req, res) => {
  const _user = req.user ?? {};
  const { id } = _user ?? {};
  const user = await Users.findById(id);
  // const { username, email } = user;
  res.status(200).json(user);
};

router.get("/me", validateToken, meUser);
module.exports = router;
