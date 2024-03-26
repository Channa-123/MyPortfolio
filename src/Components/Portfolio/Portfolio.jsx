import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import ToDoList from "../../img/ToDoList.png"
import MyPortfolio from "../../img/MyPortfolio.png";
import ExpenceApp from "../../img/ExpenceApp.png";
import SignUpForm from "../../img/SignUpForm.png";
import Navbar from "../../img/Navbar.png";
import ContactForm from "../../img/ContactForm.png";
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
      <span>Project</span>


      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src={MyPortfolio} alt='still not' /> <br/>
            <a href = "" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ToDoList} alt='' />
            <a href = "https://github.com/Channa-123/TodoList" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide> {" "}
        <SwiperSlide>
            <img src={ExpenceApp} alt='' />
            <a href = "" >
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
            <a href = "https://github.com/Channa-123?tab=repositories" >
            <button className='c-button'>Github Link </button>
            </a>
        </SwiperSlide>


      </Swiper>
      <Testimonials/>
    </div>
  )
}

export default Portfolio
