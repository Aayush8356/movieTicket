const express = require("express");
const { createTicket } = require("../controller/moviesController");
const validateToken = require("../middleware/validateToken");

const router = express.Router();

router.route("/search/:id").get(validateToken, createTicket);
// router.get("/serach/:id", validateToken, createTicket);
module.exports = router;
