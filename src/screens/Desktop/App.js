import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import { Desktop } from "./Desktop";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Desktop />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
