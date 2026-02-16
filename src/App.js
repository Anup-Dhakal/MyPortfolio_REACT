import React from "react";
import Home from "./pages/Home";
import Test from "./components/Test"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test/>} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
};

export default App;
