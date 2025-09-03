const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId, ref: "User"
     },
  movie: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Movie"},
  theatre: { type: mongoose.Schema.Types.ObjectId, ref: "Theatre" },
  showtime: String,
  seatNos: [String],
  totalPrice: Number,
  status: { type: String, default: "Booked" },
});

module.exports = mongoose.model("Booking", bookingSchema);
