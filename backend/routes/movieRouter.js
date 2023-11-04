const express = require("express");
const {
  find,
  createTicket,
  bookMovie,
} = require("../controller/moviesController");
const router = express.Router();

router.route("/all").get(async (req, res) => {
  res.status(200).json({ message: "All movies" });
});

router.route("/available").get(async (req, res) => {
  res.status(200).json({ message: "Now Watching" });
});

router.route("/:id/profile").get(async (req, res) => {
  res.status(200).json({ message: "Current Profile" });
});
router.route("/:id/notifications").get(async (req, res) => {
  res.status(200).json({ message: "notifications" });
});
router.route("/:id").get(async (req, res) => {
  res.status(200).json({ message: "specific movie" });
});
router.route("/:id/ticket").get(async (req, res) => {
  res.status(200).json({ message: "Your ticket for the show" });
});
router.route("/search/:id").get(find);
router.route("/search/show/:id").get(createTicket);
router.route("/search/show/book/:id").get(bookMovie);
module.exports = router;
