import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const AddCar = () => {
  const [input, changeInput] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-car", input)
      .then((response) => {
        console.log(response.data);

        setMessage("Car added successfully");
        setError("");

        changeInput({
          registration_number: "",
          brand: "",
          model: "",
          vehicle_type: "",
          fuel_type: "",
          transmission: "",
          seating_capacity: "",
          rent_per_day: "",
          city: "",
          availability_status: "Available",
        });
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong");
        }

        setMessage("");
      });
  };

  return (
    <div>
        <Navigation />
      <div className="container mt-4">

        <h2 className="text-center mb-4">Add Car</h2>

        {message && (
          <div className="alert alert-success">
            {message}
          </div>
        )}

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Registration Number</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="registration_number"
              value={input.registration_number}
              onChange={inputHandler}
              placeholder="KL-01-AB-1234"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Brand</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={input.brand}
              onChange={inputHandler}
              placeholder="Maruti Suzuki"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Model</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="model"
              value={input.model}
              onChange={inputHandler}
              placeholder="Swift"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Vehicle Type</b>
            </label>
            <select
              className="form-select"
              name="vehicle_type"
              value={input.vehicle_type}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Fuel Type</b>
            </label>
            <select
              className="form-select"
              name="fuel_type"
              value={input.fuel_type}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="CNG">CNG</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Transmission</b>
            </label>
            <select
              className="form-select"
              name="transmission"
              value={input.transmission}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Seating Capacity</b>
            </label>
            <input
              type="number"
              className="form-control"
              name="seating_capacity"
              value={input.seating_capacity}
              onChange={inputHandler}
              placeholder="5"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Rent Per Day (₹)</b>
            </label>
            <input
              type="number"
              className="form-control"
              name="rent_per_day"
              value={input.rent_per_day}
              onChange={inputHandler}
              placeholder="2500"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>City</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={input.city}
              onChange={inputHandler}
              placeholder="Kochi"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-dark">
              <b>Availability Status</b>
            </label>
            <select
              className="form-select"
              name="availability_status"
              value={input.availability_status}
              onChange={inputHandler}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary w-100"
              onClick={readValue}
            >
              Add Car
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddCar;