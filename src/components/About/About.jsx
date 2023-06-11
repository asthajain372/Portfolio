import React, { useContext } from "react";
import "./About.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import git from "../../img/git.png";
const About = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="About" id="About"><div className="i-rights">
        <img src={girl} alt="" />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>

        <div className="i-lefts">
          <div className="i-names">

            <span style={{ color: darkMode ? "white" : "" }}>About Us</span>

            <span></span>
            <span className="gitlink" style={{ color: darkMode ? 'white' : '' }}>

              As a college student who has learned the MERN stack, I am passionate about creating innovative and robust web applications.
              My Enthusiasm for web development led me to explore and learn the basics of HTML, CSS, and JavaScript, and then delve deeper into the MERN stack by working on various projects .
              As a Web developer, I bring a depth of expertise in building modern web applications using MongoDB, Express.js, React, and Node.js
              . My skills include designing and developing RESTful APIs, building dynamic front-end interfaces with React, and working with NoSQL databases like MongoDB to manage and store complex data.
              With a passion for creating efficient and effective software solutions, I am excited to contribute my skills to a team that values creativity, collaboration, and excellence.
              Check out my projects from my

              <a href="https://github.com/asthajain372" target="_blank">
                <span>GitHub Profile .</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      <span className="topic" style={{ color: darkMode ? 'white' : '' }}>WORK EXPERIENCE</span>
      <div className="education-container">
        <div className="education-items work">
          <div className="school" style={{ color: darkMode ? 'white' : '' }}>Full-Stack Intern</div>
          <div className="degree" style={{ color: darkMode ? 'white' : '' }}>Null Class</div>
          <div className="date" style={{ color: darkMode ? 'white' : '' }}>Dec 2022 - Jan 2023</div>
          <div className="description" style={{ color: darkMode ? 'white' : '' }}>During the period , my daily
            work was to create frontend using React, backend using Nodejs and deploy the frontend and backend part using Netlify and Render respectively . </div>
        </div>
      </div>

    </>
  );
};

export default About;
