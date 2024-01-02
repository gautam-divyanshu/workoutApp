import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetail from "../components/WorkoutDetail";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/");
      const json = await response.json();
      setWorkouts(json);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div>
        {workouts && workouts.map((workout) => (
          <WorkoutDetail key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
