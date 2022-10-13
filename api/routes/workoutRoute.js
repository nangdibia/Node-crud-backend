const express = require("express");
const Router = express.Router();
const workoutController = require("../controllers/workoutController");

Router.get("/", workoutController.getAllWorkouts);
Router.post("/", workoutController.createWorkout);
Router.get("/:id", workoutController.getSingleWorkouts);
Router.delete("/:id", workoutController.deleteWorkout);
Router.patch("/:id", workoutController.UpdateWorkout);

console.log("all working");
module.exports = Router;
