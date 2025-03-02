const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://maryamjavedshk:raginaphilange@cluster0.nviwv.mongodb.net/globetrotter?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;
