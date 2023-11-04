const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: [true, "Please provide the title"],
    },
    MovieURL: {
      type: String,
      required: [true, "URL"],
    },
    ReleasedYear: {
      type: String,
      required: [true, "Please provide a password"],
    },
    Casts: {
      type: String,
      required: [true, "Please provide the title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movies", userSchema);
