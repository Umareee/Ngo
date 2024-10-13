"use client";
import { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    const errors = {};
    if (!formData.name) errors.name = "Please enter your name";
    if (!formData.email) errors.email = "Please enter your email";
    if (!formData.subject) errors.subject = "Please enter a subject";
    if (!formData.message) errors.message = "Please enter your message";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Send form data to API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>Contact for any query</h2>
        </div>
        <div className="contact-img">
          <img src="/images/contact.jpg" alt="Contact Image" />
        </div>
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <p className="help-block text-danger">{formErrors.name}</p>}
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="help-block text-danger">{formErrors.email}</p>}
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {formErrors.subject && <p className="help-block text-danger">{formErrors.subject}</p>}
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {formErrors.message && <p className="help-block text-danger">{formErrors.message}</p>}
            </div>
            <div>
              <button className="btn btn-custom" type="submit" id="sendMessageButton">
                Send Message
              </button>
            </div>
          </form>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contactform;
