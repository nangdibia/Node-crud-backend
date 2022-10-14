const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const workoutRoute = require("./api/routes/workoutRoute");
const app = express();

//middlewares
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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
