const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  clues: [String],
  funFacts: [String],
  trivia: [String],
  imageUrl: String,
});

module.exports = mongoose.model("Destination", DestinationSchema);
