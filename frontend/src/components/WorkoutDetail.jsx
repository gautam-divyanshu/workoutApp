import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetail = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/deleteWorkout/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
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