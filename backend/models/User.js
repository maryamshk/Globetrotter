const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  incorrectAnswers: { type: Number, default: 0 },
  challengesSent: { type: Number, default: 0 },
  challengesReceived: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
