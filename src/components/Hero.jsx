import React, { useEffect } from "react";
import "aos/dist/aos.css";
import heroBg from "../assets/img/hero-bg.jpg"; // ✅ Correct way to import
import Typed from "typed.js";

const Hero = () => {
 useEffect(() => {
    const typedElement = document.querySelector(".typed");
    if (typedElement) {
      const typedStrings = typedElement
        .getAttribute("data-typed-items")
        .split(",");

      const typed = new Typed(".typed", {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });

      return () => {
        typed.destroy(); // cleanup on unmount
      };
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src={heroBg}
        alt="Background"
        className="img-fluid hero-bg"
        data-aos="fade-in"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Anup Dhakal</h2>
        <p>
          I'm a {" "}
          <span
            className="typed"
            data-typed-items="Student, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
