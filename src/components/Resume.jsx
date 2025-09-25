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

            

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Engineering</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>
                  Khwopa College of Engineering, Bhaktapur, Bagmati State
                </em>
              </p>
              
            </div>

            <div className="resume-item">
              <h4>+2 Science</h4>
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
             <div className="resume-item">
              <a href ="https://drive.google.com/file/d/1F7OXyVSnpTsC1BgR3IucnqYBLJQ3yp_n/view?usp=drive_link" target="_blank" rel="noreferrer">
              <h4>View CV </h4>
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
