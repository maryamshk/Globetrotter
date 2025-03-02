const express = require("express");
const {
  getRandomDestination,
  validateGuess,
} = require("../Controllers/destinationController");

const router = express.Router();

router.get("/random", getRandomDestination);
router.post("/guess", validateGuess);

module.exports = router;
