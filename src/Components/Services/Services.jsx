import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion, transform} from 'framer-motion'

const Services = () => {
    const transition = {duration : 1,type: 'spring'}
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className='awesome'>
            <span style={{color:darkMode? 'white': '' }}>My Last</span>
            <span>Works</span>
            <span>In my projects, I handle web design, development and <br />
            UI/UX to create captivating digital experiences.<br />
            I focus on crafting visually appealing webisites with <br />
            intuitive interfaces to engauage usersf effectively.</span>
            <a href={Resume} download> 
            <button className='button s-button'> Download CV </button>
            </a>
            
            <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>

        </div>
        {/*right side */}
        <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "UI/UX design focuses on creating intuitive, user-friendly interfaces for digital products."
            }
            color="rgba(252, 166, 31, 0.45)"
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