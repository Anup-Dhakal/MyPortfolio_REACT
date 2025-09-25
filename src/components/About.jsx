import React from 'react'
import profileImg from "../assets/img/my-profile-img.jpg";
import { useState, useEffect } from "react";

function About() {
  const [age, setAge] = useState("");

  useEffect(() => {
    function updateAge() {
      const birthday = new Date("2001-12-23");
      const today = new Date();

      const diffTime = today - birthday;
      const ageYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      const ageDays = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
      );

      setAge(`${ageYears} years and ${ageDays} days`);
    }

    updateAge();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I am Anup Dhakal Computer Engineering Graduate From Tribhuvan University.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
               src={profileImg}
               className="img-fluid"
               alt="My Profile"
                />
          </div>
          <div className="col-lg-8 content">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong>{" "}
                    <span id="birthday">23 December 2001</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birth Place:</strong> <span>Tansen, Palpa</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Current Address:</strong> <span>Kathmandu</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>anupdhakal1.com.np</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{age}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Bachelor's</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>anup.dkal@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
