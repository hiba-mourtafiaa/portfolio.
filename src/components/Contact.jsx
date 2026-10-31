
import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("Message sent successfully!");
      form.current.reset();

    } catch (error) {
      console.error("Email error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <span className="contact-label">LET'S CONNECT</span>

        <h2>
          Have a project in mind?
          <br />
          Let's create something amazing
          <br />
          together.
        </h2>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <span>mourtafiaah@gmail.com</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✆</span>
            <span>+90 538 443 24 83</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⌂</span>
            <span>AKSARAY, Türkiye</span>
          </div>
        </div>

        <p className="copyright">
          © 2026 Aarav Singh. All rights reserved.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-row">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>

          <select name="project" defaultValue="" required>
            <option value="" disabled>
              Your Project
            </option>
            <option value="Website Design">Website Design</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">Portfolio Design</option>
            <option value="Brand Identity">Brand Identity</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit" disabled={status === "Sending..."}>
            {status === "Sending..." ? "Sending..." : "Send Message"}
            <span>➤</span>
          </button>

          {status && (
            <p className="form-status">{status}</p>
          )}
        </form>
      </div>

      <div className="contact-visual">
        <img
          src="/contact.png"
          alt="Abstract 3D glass sculpture"
        />
      </div>
    </section>
  );
}
