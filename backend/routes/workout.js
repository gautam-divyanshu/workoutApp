import express from "express";
import requireAuth from "../middleware/requireAuth.js";

import {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} from "../controller/workoutController.js";

const router = express.Router();

router.use(requireAuth);
router.get("/", getWorkouts);
router.post("/createWorkout", createWorkout);
router.delete("/deleteWorkout/:id", deleteWorkout);

export default router;
