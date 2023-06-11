import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesomes">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>SKILLS</span>
        {/* <span>services</span> */}
        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem", top: "3rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji} 
            heading={"Backend"}
            detail={"Node.js"}
            a={"Express"}
            b={"MongoDB"}
            c={"Mongoose"}
            />
          <i class="fa-regular fa-database"></i>
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-14rem", top: "3rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            detail={"React"}
            a={"Javascript"}
            b={"Node.js"}
            c={"HTML/CSS"}
            
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
