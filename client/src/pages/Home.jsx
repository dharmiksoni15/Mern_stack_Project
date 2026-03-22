import React, { useState } from "react";
import "./Home.css";

const Home = () => {

const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="status">🟢 Open to opportunities</p>
          <h1>Hi, I'm Dharmik Soni</h1>
          <h2>MERN Stack Developer</h2>
          <p className="intro">
            MCA 2nd year student and aspiring Full Stack MERN Developer. I build
            full stack web applications to improve my development skills and
            create real-world projects. 👨‍💻
          </p>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate about building full stack web apps. I specialise in the
          MERN stack — MongoDB, Express.js, React.js, and Node.js — and love
          turning ideas into real, working web applications. I focus on writing
          clean, maintainable code, building secure REST APIs with JWT
          authentication, and creating responsive UIs users enjoy.
        </p>
        <a
          href="https://github.com/dharmiksoni15"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View GitHub Profile ↗
        </a>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Tech Stack</h2>
        <div className="skills-grid">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "REST API",
            "JWT Auth",
            "Zod Validation",
            "Responsive Design",
          ].map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>What I Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🌐 Frontend Web Development</h3>
            <p>
              Building responsive, modern UIs using React.js, HTML, CSS, and
              JavaScript with a focus on great user experience.
            </p>
          </div>
          <div className="service-card">
            <h3>🔗 REST API Development</h3>
            <p>
              Designing and building secure, scalable REST APIs using Node.js
              and Express with proper validation and error handling.
            </p>
          </div>
          <div className="service-card">
            <h3>⚡ Full Stack MERN Development</h3>
            <p>
              End-to-end web application development using MongoDB, Express.js,
              React.js, and Node.js from database to UI.
            </p>
          </div>
          <div className="service-card">
            <h3>📱 Responsive Website Design</h3>
            <p>
              Creating websites that look and work great on all screen sizes —
              desktop, tablet, and mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Get in Touch 🚀</h2>
        <p>
          Have a project in mind or want to hire me? Drop a message and I'll get
          back to you soon.
        </p>
        <div className="contact-info">
          <p>📧 Email: dharmiksoni010@gmail.com</p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/dharmiksoni15"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/dharmiksoni15
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
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

      <footer>
        <p>© 2026 Dharmik Soni · </p>
      </footer>
    </main>
  );
};

export default Home;
