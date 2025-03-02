const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Destination = require("./models/Destination");
const data = require("./data.json");

connectDB();

const seedDatabase = async () => {
  try {
    const destinations = data.map((item) => ({
      city: item.city,
      country: item.country,
      clues: item.clues,
      funFacts: item.fun_fact,
      trivia: item.trivia,
    }));
    await Destination.insertMany(destinations);
    console.log("Database seeded!");
    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedDatabase();
