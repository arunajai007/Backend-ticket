const express = require("express");
const { addTheatre, getAllTheatres, updateTheatre, deleteTheatre } = require("../controllers/theatreController");

const router = express.Router();

router.post("/", addTheatre);
router.get("/", getAllTheatres);
router.put("/:id", updateTheatre);
router.delete("/:id", deleteTheatre);

module.exports = router;
