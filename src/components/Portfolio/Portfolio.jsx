import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import Education from "../Education/Education";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const educationList = [
    {
      id: 1,
      school: "SILVER OAK UNIVERSITY",
      degree: "Bachelor of Technology in computer science",
      date: "2021 - 2025",
      description: "1st year- 8.7/10 CPI   "
    },
    {
      id: 2,
      school: "AISSCE(12th Science)",
      degree: "CBSE",
      date: "2020 - 2021",
      description: "Aggregate- 408/500 (81.6%)"
    },
    {
      id: 3,
      school: "AISSC(10th)",
      degree: "CBSE",
      date: "2018 - 2019",
      description: "Aggregate- 442/500 (88.4%)"
    }
  ];
  return (
   
    <div className="portfolio" id="portfolio">
      {/* heading */}
      {/* <span   style={{color: darkMode?'white': ''}}>WORK EXPERIENCE</span> */}
      {/* <span   style={{color: darkMode?'white': ''}}>EDUCATION</span> */}
    
      {/* <span>Portfolio</span> */}

      {/* slider
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper> */}
       {/* <Education educationList={educationList} /> */}
       <Education />
       {/* <span   style={{color: darkMode?'white': ''}}>EXPERIENCE</span> */}

    </div>
  );
};

export default Portfolio;
