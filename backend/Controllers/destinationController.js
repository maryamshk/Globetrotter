const Destination = require("../models/Destination");

// Get a random destination
exports.getRandomDestination = async (req, res) => {
  try {
    const destination = await Destination.aggregate([{ $sample: { size: 1 } }]);
    if (!destination)
      return res.status(404).json({ message: "No destinations found" });
    res.json(destination[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Validate user's guess
// exports.validateGuess = async (req, res) => {
//   const { destinationId, guess } = req.body;
//   try {
//     const destination = await Destination.findById(destinationId);
//     const normalizedDestinationName = destination.name.trim().toLowerCase();
//     const normalizedGuess = guess.trim().toLowerCase();
//     const isCorrect = normalizedDestinationName === normalizedGuess;
//     res.json({ correct: isCorrect, funFact: destination.funFacts[0] });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

exports.validateGuess = async (req, res) => {
  const { destinationId, guess } = req.body;
  try {
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    const normalizedDestinationName = destination.city.trim().toLowerCase();
    const normalizedGuess = guess.trim().toLowerCase();
    const isCorrect = normalizedDestinationName === normalizedGuess;
    res.json({ correct: isCorrect, funFact: destination.funFacts[0] });
  } catch (err) {
    console.error("Error in validateGuess:", err.message);
    res.status(500).json({ message: err.message });
  }
};
