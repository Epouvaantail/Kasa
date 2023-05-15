import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js"
// import Error from "../pages/Error.js"

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
  // else
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/404" element={<Error />} />
  //     </Routes>
  //   </div>
  // )
};

export default router;