
import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ToDoList from '../../img/ToDoList.png';
import Reserch from '../../img/Reserch.png';
import ARG from '../../img/ARG.png';
import NewLanka from '../../img/NewLanka.png';
import Kensington from '../../img/Kensington.png';
import MyPortfolio from '../../img/MyPortfolio.png';
import ExpenceApp from '../../img/ExpenceApp.png';
import SignUpForm from '../../img/SignUpForm.png';
import Navbar from '../../img/Navbar.png';
import ContactForm from '../../img/ContactForm.png';
import FaceRec from '../../img/FaceRec.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Testimonials from '../Testimonials/Testimonials';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      img: Reserch,
      link: 'https://www.linkedin.com/posts/channa-prasad-95a5322a5_finalyearproject-python-flutter-activity-7345175982409949184-xv2L',
      label: 'LinkedIn',
      title: 'Research Project',
    },
    { img: ARG, link: 'https://arg-workforce-9aq4.vercel.app/', label: 'Live Link', title: 'ARG Workforce' },
    { img: NewLanka, link: 'https://www.newlankagoldhouse.com/', label: 'Live Link', title: 'New Lanka' },
    { img: Kensington, link: 'https://kensington.vercel.app/', label: 'Live Link', title: 'Kensington' },
    { img: MyPortfolio, link: '', label: 'Github Link', title: 'My Portfolio' },
    {
      img: FaceRec,
      link: 'https://www.linkedin.com/posts/channa-prasad-95a5322a5_attendancesystem-teamcollaboration-python-activity-7178844755290718209-1rhQ',
      label: 'LinkedIn',
      title: 'Face Recognition',
    },
    { img: ToDoList, link: 'https://github.com/Channa-123/TodoList', label: 'Github Link', title: 'ToDo List' },
    { img: ExpenceApp, link: 'https://github.com/Channa-123/Expence-Master-App', label: 'Github Link', title: 'Expense App' },
    { img: SignUpForm, link: 'https://github.com/Channa-123/SignUp-Page', label: 'Github Link', title: 'SignUp Form' },
    { img: ContactForm, link: 'https://github.com/Channa-123/Contact-form', label: 'Github Link', title: 'Contact Form' },
    { img: Navbar, link: 'https://github.com/Channa-123/NavBar', label: 'Github Link', title: 'Navbar' },
  ];

  return (
    <section className={`portfolio ${darkMode ? 'dark' : ''}`} id="Portfolio">
      {/* Heading */}
      <div className="portfolio__header" data-aos="fade-up">
        <h3>My Recent</h3>
        <h2>Projects</h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        className="portfolio-slider"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-card" data-aos="zoom-in">
              <img src={project.img} alt={project.title} className="portfolio-card__image" />
              <div className="portfolio-card__content">
                <h4 className="portfolio-card__title">{project.title}</h4>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="portfolio-card__button">{project.label}</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Testimonials />
    </section>
  );
};

export default Portfolio;