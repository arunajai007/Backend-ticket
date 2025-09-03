const Theatre = require("../models/Theatre");

exports.addTheatre = async (req, res) => {
  try {
    const { name, location } = req.body;

    const existingTheatre = await Theatre.findOne({ name, location });
    if (existingTheatre) {
      return res.status(400).json({ message: "Theatre already exists at this location" });
    }

    const theatre = new Theatre(req.body);
    await theatre.save();
    res.status(201).json({ message: "Theatre added successfully", theatre });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find();
    res.json(theatres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTheatre = async (req, res) => {
  try {
    const updated = await Theatre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Theatre not found" });
    res.json({ message: "Theatre updated", theatre: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTheatre = async (req, res) => {
  try {
    const deleted = await Theatre.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Theatre not found" });
    res.json({ message: "Theatre deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
