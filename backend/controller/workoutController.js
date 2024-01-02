import workoutModal from "../modals/workoutModel.js";
import mongoose from "mongoose";

//get all the workouts
const getWorkouts = async (req, res) => {
  const workouts = await workoutModal.find({}).sort({ createdAt: -1 }); 
  res.status(200).json(workouts);
};

const createWorkout = async (req, res) => {
  const { title, reps } = req.body;
  console.log(req.body);
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }
  try {
    const workout = await workoutModal.create({ title, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const {id} = req.params;  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await workoutModal.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

export { getWorkouts, createWorkout, deleteWorkout };
