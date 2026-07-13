import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddCar from "./components/AddCar";
import ViewCars from "./components/ViewCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<ViewCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;