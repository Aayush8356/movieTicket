const axios = require("axios");
const asyncHandler = require("express-async-handler");

const Movies = require("../models/movieModel");
let query;
const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/auto-complete",
  params: { q: { query } },
  headers: {
    "X-RapidAPI-Key": "ad7d8a6095mshc1fb98d9ca8e3f0p189a6bjsn02e685fe6c46",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

let searchedMovieList;

const find = async (req, res) => {
  const { params } = options;
  params.q = req.params.id;
  const response = await axios.request(options);
  if (!response) {
    res.status(400);
    return res.json({ message: "No response from api" });
    // throw new Error("Not valid entry");
  }
  // const { id, l, i, y, s } = response.data.d[0];
  // const movie = await Movies.create({
  //   id: id,
  //   Title: l,
  //   MovieURL: i.imageUrl,
  //   ReleasedYear: y,
  //   Casts: s,
  // });
  // res.status(200).json(movie);
  searchedMovieList = [...response.data.d];
  return res.status(200).json(searchedMovieList);
};

let movie;
const createTicket = async (req, res) => {
  movie = await searchedMovieList.filter(
    (perMovie) => perMovie.id === String(req.params.id)
  );
  const { id, l, i, y, s } = movie;
  if (!movie) {
    return res
      .status(400)
      .json({ message: "No movie/show has been selected!" });
  }
  const name = l;
  return res.status(200).json({ message: name });
};

const bookMovie = (req, res) => {};
module.exports = { find, createTicket, bookMovie };
