import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  if (!user) {
    return;
  }
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/deleteWorkout/" + workout._id,
      {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    console.log(json);
    dispatch({ type: "DELETE_WORKOUT", payload: json });
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetail;
