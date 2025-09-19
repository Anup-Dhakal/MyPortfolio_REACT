import React from "react";

const Contact = () => {
  const sendMail = () => {
    // Example: Replace this with your email sending logic
    alert("Message sent!");
  };

  return (
    <div>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Left Side - Info */}
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Palpa</h3>
                    <p>Tansen</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+977 9864240023</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>anup.dkal@gmail.com</p>
                  </div>
                </div>

                <iframe
                  title="Portfolio preview"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28220.28812605456!2d83.52048555191486!3d27.85480026371584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39967f7040b82b1d%3A0xb7142bb9805c4488!2sTansen%2032500!5e0!3m2!1sen!2snp!4v1736692716353!5m2!1sen!2snp"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "270px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="col-lg-7">
              <form
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message" className="pb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="10"
                      className="form-control"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button
                      type="button"
                      onClick={sendMail}
                      className="btn btn-primary rounded-pill px-4 py-2 text-white hover:bg-blue-600 transition-colors"
                    >
                      Send Message
                    </button>
                    <div id="form-error-message" className="text-danger mt-3"></div>
                  </div>
                </div>
              </form>
              <div id="status"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
