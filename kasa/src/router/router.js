import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js"
import Error from "../pages/Error.js"
import Logement from "../pages/Logement.js";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Logement/:id" element={<Logement />} />
      </Routes>
    </div>
  );
};

export default router;