import React, { useContext }  from 'react';
import { themeContext } from "../../Context";
import './Education.css';
// import EducationList from '../EducationList/EducationList';

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
  {/* <div className='container'> */}

   
        {/* <div className="education-items work">
          <div className="school"  style={{color: darkMode?'white':''}}>Full-Stack Intern</div>
          <div className="degree" style={{color: darkMode?'white':''}}>Null Class</div>
          <div className="date"  style={{color: darkMode?'white':''}}>Dec 2022 - Jan 2023</div>
          <div className="description"  style={{color: darkMode?'white':''}}>During the period , my daily
 work was to create frontend using React, backend using Nodejs and deploy the frontend and backend part using Netlify and Render respectively . </div>
        </div> */}
      

    <span   style={{color: darkMode?'white': ''}}>EDUCATION</span>
    <div className="education-container">
        <div className="education-items">
          <div className="school"  style={{color: darkMode?'white':''}}>SILVER OAK UNIVERSITY</div>
          <div className="degree" style={{color: darkMode?'white':''}}>Bachelor of Technology in computer science</div>
          <div className="date"  style={{color: darkMode?'white':''}}>2021 - 2025</div>
          <div className="description"  style={{color: darkMode?'white':''}}>1st year- 8.7/10 CPI  </div>
        </div>
        </div>
    <div className="education">
      
      <div className="education-item">
        <div className="school"  style={{color: darkMode?'white':''}}>AISSCE(12th Science)</div>
        <div className="degree" style={{color: darkMode?'white':''}}>CBSE</div>
        <div className="date"  style={{color: darkMode?'white':''}}>2020 - 2021</div>
        <div className="description"  style={{color: darkMode?'white':''}}>Aggregate- 408/500 (81.6%) </div>
      </div>
      <div className="education-item">
        <div className="school"  style={{color: darkMode?'white':''}}>AISSC(10th)</div>
        <div className="degree" style={{color: darkMode?'white':''}}>CBSE</div>
        <div className="date"  style={{color: darkMode?'white':''}}>2018 - 2019</div>
        <div className="description"  style={{color: darkMode?'white':''}}>Aggregate- 442/500 (88.4%)</div>
      </div>
     
  
  </div>
    


    </>
  );
};

export default Education;
// import React, { useContext }  from 'react';
// import { themeContext } from "../../Context";
// import './Education.css';
// // import EducationList from '../EducationList/EducationList';

// const Education = ({ educationList }) => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className="education-container">
//       {/* <h2>Education</h2> */}
//       {educationList.map((education) => (
//         <div key={education.id} className="education-item">
//           <div className="school"  style={{color: darkMode?'white':''}}>{education.school}</div>
//           <div className="degree" style={{color: darkMode?'white':''}}>{education.degree}</div>
//           <div className="date"  style={{color: darkMode?'white':''}}>{education.date}</div>
//           <div className="description"  style={{color: darkMode?'white':''}}>{education.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Education;