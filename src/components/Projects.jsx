import React from "react";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
        </div>

        <div className="container">
          <div className="row gy-4">
            {/* Project 1 */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="https://github.com/Anup-Dhakal/NEPSE-stock-Prediction-ML-Project" className="stretched-link" target = "_blank" rel="noreferrer">
                    NEPSE Stock Prediction using LSTM
                  </a>
                </h4>
                <p className="description">
                  Minor project done as a requirement of Computer Engineering
                  Sixth Semester Curriculum, based on Deep Learning model LSTM.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="https://github.com/Anup-Dhakal/SmartFlow" className="stretched-link">
                    SmartFlow: Intelligent Traffic Management System for Speed
                    Monitoring and Adaptive Signal Control
                  </a>
                </h4>
                <p className="description">
                  Major project for the fourth year of Engineering. Developed a
                  vehicle detection and tracking system using YOLOv8 + DeepSORT.
                  Integrated speed estimation using real-world distance and
                  video FPS.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="https://colab.research.google.com/drive/1dmI7nN0vplheysY4_2eTX_V3dQCd-tXt?usp=sharing" className="stretched-link" target = "_blank" rel="noreferrer">
                    Image Generation using GANs
                  </a>
                </h4>
                <p className="description">
                  Implemented Generative Adversarial Networks (GANs) to generate
                  realistic male and female faces. Trained the model on a
                  diverse dataset to improve image quality and diversity.
                </p>
              </div>
            </div>

            {/* Project 4 */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="https://anupdjangotodo.onrender.com" className="stretched-link" target = "_blank" rel="noreferrer">
                    Task Tracker WebApp using Django with Login and Signup
                  </a>
                </h4>
                <p className="description">
                  This is a Django-based To-Do web application that allows users to securely register, log in, and 
                  manage their personal tasks. Built using Django’s ORM, the app enables users to create, view, update, 
                  and delete tasks efficiently, with each task linked to the authenticated user. It features a clean and 
                  responsive interface for easy task management, making it a practical project 
                  that demonstrates full-stack development, user authentication, and database interaction using Django.
                </p>
              </div>

              
            </div>


             {/* Project 4 */}
             <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="https://anupdjangoweatherapp.onrender.com/" className="stretched-link" target = "_blank" rel="noreferrer">
                    Django Weather Forecast Application
                  </a>
                </h4>
                <p className="description">
                  A Django-based web application that provides real-time weather information for any city. Users can 
                  search for a location and instantly see weather details such as temperature, humidity, wind speed, 
                  and weather conditions. The app integrates with a weather API to fetch live data and uses Django’s 
                  ORM and templating system to display results dynamically. This project
                   demonstrates API integration, backend development, and responsive UI design using Django
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
