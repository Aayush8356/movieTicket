const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  // Title, Poster, Actors, Genre,Type
  {
    Title: {
      type: String,
      required: [true, "Please provide the title"],
    },
    Poster: {
      type: String,
      required: [true, "URL"],
    },
    Type: {
      type: String,
      required: [true, "Please provide a password"],
    },
    // Actors: {
    //   type: String,
    //   required: [true, "Please provide the title"],
    // },
    Year: {
      type: String,
      required: [true, "Please provide the title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movies", userSchema);
