import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
//import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FlotingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion'
import me from '../../img/me.png';
import { Link } from 'react-scroll';

const Intro = () => {
  const transition = {duration : 2, type: 'spring'}

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Intro'>
        <div className='i-left'>
        <div className='i-name'>
            <span style={{color: darkMode? 'white': '' }}>Hy! I Am </span>
            <span>Channa Prasad</span> <span>
            Faculty Of Technology, <br/>
            University of Sri Jayewardenepura <br/>
            Bachelor of Information and Communication Technology - Software Technology <br/>
            2021 - 2025</span>
            <span><h2> I am a graduate student specializing in Software Technology at the University of Sri
            Jayewardenepura. Results-driven Full-Stack Developer with hands-on experience in both frontend
            and backend development, specializing in React.js, Next.js, Node.js, MongoDB, and Tailwind CSS. I
            am passionate about building scalable web applications, optimizing APIs, improving user
            experiences and using technology to solve real world problems. I have experience working in Agile
            environments and delivering high-quality, efficient solutions.
              </h2>
            </span>
        </div>
        <button className="button i-button">< Link spy={true} to='Contact' id='Footer' smooth={true}> Hire me </Link></button>
        <div className='i-icons'>
            <a href="https://github.com/Channa-123"> 
            <img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/channa-prasad-95a5322a5"> 
            <img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com"> 
            <img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={me} alt="" />
        

        <motion.img
        initial={{left: '-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt="" />

        <motion.div 
        initial={{top: '-4%',left: '-74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top:'-4%', left: '68%'}}
        className='floating-div'
        >
            <FlotingDiv image ={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>

        <motion.div 
        initial={{left: '9rem', top:'22rem'}}
        whileInView={{left: '-5rem'}}
        transition={transition}
        style={{top: '22rem', left:'0rem'}}
        className='floating-div'
        >
            <FlotingDiv image={thumbup} txt1="Mobile Application " txt2="Development"/>
        </motion.div>

        {/* blur divs */}
        <div className='blur' style={{background:"rgb(238 210 255 "}} ></div>
        <div className='blur'
        style={{
            background: '#9ddfecff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
        }}>

        </div>
      </div>
    </div>
  )
}

export default Intro
