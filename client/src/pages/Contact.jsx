import React, { useState } from "react";
import "./Home.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // handleInput Event
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handleSubmit event
  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(contact);

  try {
    const response = await fetch("http://localhost:3100/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      alert("Message sent successfully");
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
    <section className="contact-page">
      <h2>Get in Touch 🚀</h2>
      <p>
        Have a project in mind or want to hire me? Drop a message and I'll get
        back to you soon.
      </p>

      <div className="contact-info">
        <p>📧 Email: dharmiksoni010@gmail.com</p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/dharmiksoni15"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/dharmiksoni15
          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/dharmik-soni-26a557280"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </p>

        <p>📍 Location: India · Available for Remote Work</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={contact.username}
          onChange={handleInput}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInput}
        />

        <label>Message</label>
        <textarea
          name="message"
          value={contact.message}
          onChange={handleInput}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
