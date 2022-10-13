const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoute = require("./api/routes/workoutRoute");
const app = express();

//middlewares
app.use(express.json());
app.use("/api/workouts", workoutRoute);

function start() {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      app.listen(process.env.PORT, () => {
        console.log("running on port", process.env.PORT);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

start();
