import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../assets/img/hero-bg.jpg"; // ✅ Correct way to import

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="Background" className="img-fluid hero-bg" data-aos="fade-in" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Anup Dhakal</h2>
        <p>
          I'm{" "}
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
