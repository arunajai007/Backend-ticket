const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  rating: String,
  duration: String,
  imageUrl: String,
  theatreName: String,
  availableSeats: Number,
  showtime: String,
  genre: String,
});

module.exports = mongoose.model("Movie", movieSchema);
