import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import github from "../../img/github.png";
import git from "../../img/git.png";

const Testimonial = () => {
  const clients = [
    {
      img: project1,
      im: github,
      imgs: git,
      review:
        "A Stackoverflow clone where users can ask the questions , answer other's queries , create and update the own profile .",
      // tags:["React","Express","Node.js","MongoDB"],
      a: "React",
      b: "Express",
      c: "Node.js",
      d: "MongoDB",
      link:"https://github.com/asthajain372/stack-overflow",
      links:"https://glowing-torte-9cf404.netlify.app/",
      title:"Stackoverflow clone",
      l:"Project Link"
    },
    {
      img: project2,
      im: github,
      imgs: git,
      review:
        "A Social Media Application where users can create profile , post their stories , like , comment and get connected to other .",
      // tags:["React","Express","Node.js","MongoDB"],
      a: "React",
      b: "Express",
      c: "Node.js",
      d: "MongoDB",
      link:"https://github.com/asthajain372/social-media",
      links:"",
      title:"Social Media"
    },
    {
      img: project3,
      im: github,
      imgs: git,
      review:
        "A Weather app which demonstrate the weather condition , min and max temp of the location through api feached data.",
      // tags:["HTML","CSS","Express","Node.js"],
      a: "HTML/CSS",
      b: "JavaScript",
      c: "Express",
      d: "Node.js",
      link:"https://github.com/asthajain372/weather_web",
      links:"",
      title:"Weather app"
    },
    // {
    //   img: project4,
    //   im: github,
    //   imgs: git,
    //   review:
    //     "A Mern application ",
    //   // tags:["HTML","CSS","Express","Node.js","MongoDB"],
    //   a: "HTML/CSS",
    //   b: "Express",
    //   c: "Node.js",
    //   d: "MongoDB",
    //   link:"https://github.com/asthajain372/mern-project",
    //   title:"Mern Website"
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span> */}
        <span>PORTFOLIO</span>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
               
                {/* <h6>{client.title}</h6> */}
                <span>{client.review}</span>
                {/* <span>
                  <a href={client.link} target="_blank">
                  <img src={client.imgs}alt="" />
                  <span> Project GitHub Link</span>
                  </a>
                </span> */}

                {/* <span>{client.review}</span> */}
                <p>
                  <li>{client.a}</li>
                  <li>{client.b}</li>
                  <li>{client.c}</li>
                  <li>{client.d}</li>
                </p>
                <span>
                  <a href={client.link} target="_blank">
                  <img src={client.imgs}alt="" />
                  <span> Project GitHub Link</span>
                  </a>
                </span>
                <span>
                  <a href={client.links} target="_blank">
                  {/* <img src={client.imgs}alt="" /> */}
                  <span>{client.l}</span>
                  </a>
                </span>
               
           
              </div>

              {/* <div style={{ width: " 1rem", height: "1rem" }} >
                <img src={client.im} alt="" />
              </div> */}

            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
// import React from "react";
// import "./Testimonial.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { Pagination } from "swiper";
// import "swiper/css/pagination";
// import project1 from "../../img/project1.png";
// import project2 from "../../img/project2.png";
// import project3 from "../../img/project3.png";
// import project4 from "../../img/project4.png";

// const Testimonial = () => {
//   const clients = [
//     {
//       img: project1,
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
//     },
//     {
//       img: project2,
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
//     },
//     {
//       img: project3,
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
//     },
//     {
//       img: project4,
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
//     },
//   ];

//   return (
//     <div className="t-wrapper" id="testimonial">
//       <div className="t-heading">
//         <span>Clients always get </span>
//         <span>Exceptional Work </span>
//         <span>from me...</span>
//       <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
//       <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

//       </div>
//       <Swiper
//         // install Swiper modules
//         modules={[Pagination]}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {clients.map((client, index) => {
//           return (
//             <SwiperSlide key={index}>
//               <div className="testimonial">
//                 <img src={client.img} alt="" />
//                 <span>{client.review}</span>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonial;
