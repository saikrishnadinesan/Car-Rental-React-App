import React from "react";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />

      <div className="container mt-5 text-center">
        <h1>Car Rental Management System</h1>
        <p className="mt-3">
          Welcome to the Car Rental Management System.
        </p>
      </div>
    </div>
  );
};

export default Home;