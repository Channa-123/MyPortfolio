import React from 'react'
import './Testimonials.css'
import{Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";


import 'swiper/css/pagination';
import 'swiper/css'





const Testimonials = () => {
    const clients=[
        {
            img: profilePic1,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic2,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic3,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic4,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
    ]

const Pagination = [1,2]

  return (
    <div className='t-wrapper' id="Testimonials">
        <div className='t-heading'>
            <span>CLients always get</span>
            <span>Exception Work</span>
            <span>from me</span>
            <div className='blur t-blurl' style={{
            background: "var(--purple)" }} >
            </div>
            <div className='blur t-blur2' style={{
            bachground:"skyblue"}} ></div>

        </div>
        { SwiperSlide }
        <swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true }}
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <img src ={client.img} alt="" />
                        <span>{client.review}</span>
                    </SwiperSlide>
                )
            })}
        
        </swiper>
      <table className='pagiTable'>
        <tr>
          <td>pagiTable</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Testimonials


// Remove the duplicate import of React from Testimonials.jsx
// import React from "react";

/*import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"; // Import specific Swiper CSS file for pagination
import { Pagination } from "swiper";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

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
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;*/
