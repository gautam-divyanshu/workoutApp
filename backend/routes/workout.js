import express from "express";

import {
  getWorkouts,
  createWorkout,  
  deleteWorkout,
} from "../controller/workoutController.js";

const router = express.Router();

router.get("/", getWorkouts);
router.post("/createWorkout", createWorkout);
router.delete("/deleteWorkout/:id", deleteWorkout);

export default router;
