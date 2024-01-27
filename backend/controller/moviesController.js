// const asyncHandler = require("express-async-handler");
// const Movies = require("../models/movieModel");
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

module.exports = { createTicket };
