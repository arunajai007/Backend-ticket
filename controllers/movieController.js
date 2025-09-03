const Movie = require("../models/Movie");

exports.addMovie = async (req, res) => {
  try {
    const { title, theatreName, showtime } = req.body;

    const existingMovie = await Movie.findOne({ title, theatreName, showtime });
    if (existingMovie) {
      return res.status(400).json({ message: "Movie already exists" });
    }

    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({ message: "Movie added successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Movie not found" });
    res.json({ message: "Movie updated", movie: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Movie not found" });
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
