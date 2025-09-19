import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          A forward-thinking and technically skilled individual dedicated to
          solving complex problems with innovative solutions. Passionate about
          computer vision, machine learning, and software development, with
          hands-on experience in YOLO and traffic management systems.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>Anup Dhakal</h4>
              <p>
                <em>
                  Proactive and detail-oriented final-year student. Experienced
                  in YOLO, OpenCV, PyTorch, and Python development.
                </em>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Engineering</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>
                  Khwopa College of Engineering, Bhaktapur, Bagmati State
                </em>
              </p>
              <p>
                Focused on developing innovative solutions for real-world
                problems, with a specialization in machine learning, computer
                vision, and intelligent systems. Worked on multiple projects
                involving video processing, dataset management, and deep
                learning.
              </p>
            </div>

            <div className="resume-item">
              <h4>Science Faculty</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>St. Xavier's School, Jawalakhel</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>School</h4>
              <h5>2011 - 2018</h5>
              <p>
                <em>St. Capitanio School, Palpa</em>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="resume-item">
              <h4>Python Developer (Freelance)</h4>
              <h5>2024 - 2025</h5>
              <p>
                <em>Self-Employed</em>
              </p>
              <ul>
                <li>
                  Implemented advanced video processing techniques using OpenCV,
                  focusing on masking and blending video elements.
                </li>
                <li>
                  Designed scripts for Google Colab and Kaggle environments to
                  preprocess and analyze datasets efficiently.
                </li>
                <li>
                  Contributed to multiple projects requiring custom
                  modifications of VGG16 and other PyTorch-based models.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
