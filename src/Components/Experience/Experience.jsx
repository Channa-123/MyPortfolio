
import React from 'react';
import './Experience.css';
import { FaLocationDot } from 'react-icons/fa6';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
<div className={`experience-wrapper ${darkMode ? 'dark' : ''}`} id="Experience">      {/* === Achievement Circles === */}
      <div className="experience">
        <div className="archivement">
          <div className="circle">2+</div>
          <span>My</span>
          <span>Certificates</span>
        </div>

        <div className="archivement">
          <div className="circle">10+</div>
          <span>Completed</span>
          <span>Projects</span>
        </div>

        <div className="archivement">
          <div className="circle">2+</div>
          <span>Years of</span>
          <span>Experience</span>
        </div>
      </div>

      {/* === Timeline Section === */}
      <div className="timeline-section" data-aos="fade-up">
        <div className="timeline-header">
          <h3>My Work</h3>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {/* First Experience */}
          <div className style={{marginLeft: '-8rem'  }}> 
            <div className='timeline-1'>
          <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
               <div className ="timeline-content">
               <h3>Intern Software Engineer</h3>
               <p>
                  FagginApps Pvt Ltd. (NeuraIT) | July 2024 - Feb 2025
                  <span className="location">
                     <FaLocationDot /> SLIIT Innovate, Malabe
                  </span>
               </p>
               <ul>
                  <li>Developed scalable web apps using React.js, Node.js & MongoDB</li>
                  <li>Worked closely with senior engineers, UI/UX, QA & PM teams</li>
                  <li>Actively participated in Agile sprints and delivered features</li>
               </ul>
               </div>
            </div>
            </div>
          </div>

          {/* Second Experience */}
          <div className="timeline-item" data-aos="fade-right" data-aos-delay="300">
            <div className='timeline-2'>
            <div className="timeline-content">
              
              
              <ul>
                <li>Supported the improvement of software features through coding, debugging, testing
                activities and Developed frontend features.</li>
                <li>Gained practical experience using industry-standard tools and technologies to deliver clientfocused
                solutions.</li>
                <li>Contributed to code reviews and documentation.</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;