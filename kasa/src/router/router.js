import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default router;