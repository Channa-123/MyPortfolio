import React from 'react'
import './Works.css'
import adobexd from "../../img/adobexd.png";
import reacticon from "../../img/Reacticon.png";
import firebase from "../../img/firebase.jpg";
import mongodb from "../../img/mongodb.png";
import nodejs from "../../img/nodejs.png";
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion'


const Works = () => {

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Works'>
        <div className='awesome'>
            <span style={{color: darkMode? 'white': '' }} >THIS IS MY</span>
            <span>Certificates </span>
            <span><a href='https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1'>
                Web Design for Beginners E-Certificate </a> - University of Moratuwa 
                <br /><br /> <a href='https://www.coursera.org/account/accomplishments/verify/KGZPMKKXV92Q'>
                    HTML, CSS, and Javascript for Web Developers </a> - Coursera</span><br /><br />
            <button className='button s-button'> Hire Me</button>
            
            <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>

        </div>
        {/* right side */}
        <div className='w-right'>
        <motion.div 
            initial={{ rotate: 45 }}
            whileInView={{ rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5, type:'spring'}}

            className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={adobexd} alt="" width={100} height={100} />
            </div>
            <div className='w-secCircle'>
                <img src={reacticon} alt="" width={100} height={100} />
            </div>
            <div className='w-secCircle'>
                <img src={mongodb} alt="" width={100} height={100} />
            </div>{" "}
            <div className='w-secCircle'>
                <img src={firebase} alt="" width={100} height={100} />
            </div>
            <div className='w-secCircle'>
                <img src={nodejs} alt="" width={100} height={100} />
            </div>
        </motion.div>
        {/* background Circles */}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
       </div>
    </div>
  )
}

export default Works
