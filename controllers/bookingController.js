const Booking = require("../models/Booking");

exports.bookTicket = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Ticket Booked ✅", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user movie theatre");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
