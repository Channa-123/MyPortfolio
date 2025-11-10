import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import ToDoList from "../../img/ToDoList.png"
import Reserch from "../../img/Reserch.png"
import ARG from "../../img/ARG.png"
import NewLanka from "../../img/NewLanka.png"
import Kensington from "../../img/Kensington.png"
import MyPortfolio from "../../img/MyPortfolio.png";
import ExpenceApp from "../../img/ExpenceApp.png";
import SignUpForm from "../../img/SignUpForm.png";
import Navbar from "../../img/Navbar.png";
import ContactForm from "../../img/ContactForm.png";
import FaceRec from "../../img/FaceRec.png";
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from "react";
import Testimonials from '../Testimonials/Testimonials';


const Portfolio = () => {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{color: darkMode? 'white': '' }}> My Recent </span>
      <span>Project</span> <br/>


      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        {/* <SwiperSlide>
            <img src={Reserch} alt='' />
            <a href = "https://www.linkedin.com/posts/channa-prasad-95a5322a5_finalyearproject-python-flutter-activity-7345175982409949184-xv2L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmVUdYBbjWml4NEhmvKkXkx0KDJ8slLfU0" >
            <button className='c-button'>Linkedln </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ARG} alt='' />
            <a href = "https://arg-workforce-9aq4.vercel.app/" >
            <button className='c-button'>Live Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={NewLanka} alt='' />
            <a href = "https://www.newlankagoldhouse.com/" >
            <button className='c-button'>Live Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Kensington} alt='' />
            <a href = "https://kensington.vercel.app/" >
            <button className='c-button'>Live Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={MyPortfolio} alt='still not' /> <br/>
            <a href = "" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide> */}
        <SwiperSlide>
            <img src={FaceRec} alt='' />
            <a href = "https://www.linkedin.com/posts/channa-prasad-95a5322a5_attendancesystem-teamcollaboration-python-activity-7178844755290718209-1rhQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmVUdYBbjWml4NEhmvKkXkx0KDJ8slLfU0" >
            <button className='c-button'>Linkedln </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ToDoList} alt='' />
            <a href = "https://github.com/Channa-123/TodoList" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ExpenceApp} alt='' />
            <a href = "https://github.com/Channa-123/Expence-Master-App" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SignUpForm} alt='' />
            <a href = "https://github.com/Channa-123/SignUp-Page" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ContactForm} alt='' />
            <a href = "https://github.com/Channa-123/Contact-form" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Navbar} alt='' />
            <a href = "https://github.com/Channa-123/NavBar" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>


      </Swiper>
      <Testimonials/>
    </div>
  )
}

export default Portfolio
