const express = require("express");
const { bookTicket, getAllBookings } = require("../controllers/bookingController");
const router = express.Router();

router.post("/", bookTicket);
router.get("/", getAllBookings);

module.exports = router;
