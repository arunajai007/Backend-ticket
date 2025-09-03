const express = require("express");
const { addMovie, getAllMovies, updateMovie, deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.post("/", addMovie);
router.get("/", getAllMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
