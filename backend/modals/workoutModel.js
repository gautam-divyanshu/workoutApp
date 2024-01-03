import { Schema, model } from "mongoose";
const workout = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const workoutModel = model("workout", workout);

export default workoutModel;
