// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import global CSS
import "./main.css";   // Your global styles (you can rename as needed)
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "aos/dist/aos.css"; // AOS animations
import "swiper/css"; // Swiper carousel


// Initialize AOS animations
import AOS from "aos";
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
