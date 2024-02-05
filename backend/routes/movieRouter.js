const express = require("express");
const {
  createTicket,
  movieStore,
  getMovieList,
} = require("../controller/moviesController");
const validateToken = require("../middleware/validateToken");

const router = express.Router();

router.route("/search/:id").get(validateToken, createTicket);
router.route("/collection").post(validateToken, movieStore);
router.route("/collection/view").get(validateToken, getMovieList);
// router.get("/serach/:id", validateToken, createTicket);

module.exports = router;
