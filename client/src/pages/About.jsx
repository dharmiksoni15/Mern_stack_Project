import React from "react";
import "./Home.css";

const About = () => {
  return (
    <main className="home">

      <section className="about">
        <h2>About Me</h2>

        <p>
          Hello! I'm <strong>Dharmik Soni</strong>, an MCA 2nd year student and an
          aspiring Full Stack MERN Developer from India.
        </p>

        <p>
          I enjoy building modern web applications using the MERN Stack —
          MongoDB, Express.js, React.js, and Node.js. My goal is to become a
          professional full stack developer and work on real-world products
          that solve meaningful problems.
        </p>

        <p>
          Currently I am focused on improving my development skills by building
          practical projects, learning Data Structures & Algorithms for
          placements, and writing clean and maintainable code.
        </p>

        <p>
          I am particularly interested in backend development, REST API design,
          authentication systems, and scalable web applications.
        </p>

        <h3>Education</h3>
        <p>
          🎓 MCA (Master of Computer Applications) – Currently Pursuing
        </p>

        <h3>My Goals</h3>
        <ul>
          <li>Become a skilled MERN Stack Developer</li>
          <li>Get placed in a good tech company</li>
          <li>Build scalable full stack web applications</li>
          <li>Continuously improve problem solving skills</li>
        </ul>

        <a
          href="https://github.com/dharmiksoni15"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View My GitHub ↗
        </a>
      </section>

    </main>
  );
};

export default About;