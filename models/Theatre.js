const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: String,
  location: String,
  totalScreens: { type: Number, default: 1 },
});

module.exports = mongoose.model("Theatre", theatreSchema);
