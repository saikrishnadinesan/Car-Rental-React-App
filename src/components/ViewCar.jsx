import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewCars = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/cars")
      .then((response) => {
        console.log(response.data);
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        

      <div className="container mt-4">

        <h2 className="text-center mb-4">View All Cars</h2>

        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">
                <tr>
                  <th>Reg No</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Fuel</th>
                  <th>Transmission</th>
                  <th>Seats</th>
                  <th>Rent/Day</th>
                  <th>City</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.registration_number}</td>
                    <td>{value.brand}</td>
                    <td>{value.model}</td>
                    <td>{value.vehicle_type}</td>
                    <td>{value.fuel_type}</td>
                    <td>{value.transmission}</td>
                    <td>{value.seating_capacity}</td>
                    <td>₹ {value.rent_per_day}</td>
                    <td>{value.city}</td>
                    <td>{value.availability_status}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
};

export default ViewCars;