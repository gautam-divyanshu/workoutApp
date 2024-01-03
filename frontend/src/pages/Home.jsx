import React, { useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetail from "../components/WorkoutDetail";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };
    if (user) {
      fetchData();
    }
  }, [dispatch, user]);
  return (
    <div className="home">
      <div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetail key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
