const asyncHandler = require("express-async-handler");
const Movies = require("../models/movieModel");
const dotenv = require("dotenv").config();
const apiKey = process.env.API_KEY;
const createTicket = async function (req, res) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${req.params.id}&apikey=${apiKey}`
  );
  const data = await response.json();
  if (data) {
    return res.status(200).json(data);
  } else {
    res.status(400);
  }
};

const movieStore = asyncHandler(async (req, res) => {
  const _user = req.user;
  const { id } = _user;
  const { title, poster, type, year } = req.body;
  if (!title || !poster || !type || !year) {
    res.status(400);
    return { error: "All field are mandatory!" };
  }
  const availableUser = await Movies.findOne({ title: title, user_id: id });
  if (availableUser) {
    res.status(400);
    throw new Error("Movie already exists!");
  }
  const movie = await Movies.create({
    user_id: id,
    title,
    poster,
    type,
    year,
  });
  res.status(200).json(movie);
});

const getMovieList = async (req, res) => {
  const movie = await Movies.find({ user_id: req.user.id });
  if (!movie) {
    res.status(404);
    throw new Error("Empty!");
  }
  res.status(200).json({ movie });
};

module.exports = { createTicket, movieStore, getMovieList };
