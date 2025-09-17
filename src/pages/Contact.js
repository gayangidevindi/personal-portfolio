import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide after 3s
  };

  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <section className="introduction">
        <h2>Contact Me</h2>
        <p>Let’s connect! You can reach me via the form below or through my profiles.</p>

        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required /><br/>
            <input type="email" placeholder="Your Email" required /><br/>
            <input type="text" placeholder="Subject" required /><br/>
            <textarea placeholder="Your Message" required></textarea><br/>
            <input type="file" />
            <button type="submit" className="btn">Send Message</button>
          </form>
          {submitted && <p className="success-msg">✅ Message Sent Successfully!</p>}
        </div>
      </section>

      {/* Direct Info Section */}
      <section className="introduction">
        <h2>Direct Contact Info</h2>
        <div className="contactform">
          <p><FaEnvelope /> <a href="mailto:gyangidevindi@gmail.com">gyangidevindi@gmail.com</a></p>
          <p><FaPhone /> 0760689429</p>
          <p><FaMapMarkerAlt /> Matara, Sri Lanka</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="introduction">
        <h2>Download My CV</h2>
        <p>Interested in my work? Get a copy of my CV to learn more about my skills and projects.</p>
        <a href="/my_cv.pdf" download>
          <button className="btn">Download</button>
        </a>
      </section>

      {/* Map Section */}
      <section className="introduction">
        <h2>My Location</h2>
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9490734093954!2d80.546!3d5.948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f7c4b7edcd9%3A0xabc123!2sMatara!5e0!3m2!1sen!2slk!4v1688888888888"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
