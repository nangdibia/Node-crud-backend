const mongoose = require("mongoose");
const Workout = require("../../models/workoutModel");

//get all workouts from the database
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  return res.status(200).json(workouts);
};

// get single workout
const getSingleWorkouts = async (req, res) => {
  const id = req.params.id.trim();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "invalid workout id" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ msg: "no such workout" });
  }

  return res.status(200).json(workout);
};

//Create new workouts into the database
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body.data;

  try {
    const workout = await Workout.create({
      title,
      load: parseInt(load),
      reps: parseInt(reps),
    });
    return res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
  }
};

//Delete workout from the database
const deleteWorkout = async (req, res) => {
  const id = req.params.id.trim();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "invalid workout id" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ msg: "no such workout" });
  }
  return res.status(200).json(workout);
};

//Update workout in the database
const UpdateWorkout = async (req, res) => {
  const id = req.params.id.trim();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "invalid workout id" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ msg: "no such workout" });
  }
  return res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getSingleWorkouts,
  deleteWorkout,
  UpdateWorkout,
};
