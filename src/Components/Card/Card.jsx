import React from 'react'
import './Card.css'
const Card = ({emoji, heading, detail}) => {
  return (
    <div className='Card'>
      <img src={emoji} alt='' />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="https://www.quora.com/If-I-use-HTML-CSS-React-Express-and-MongoDB-to-build-a-project-is-it-required-to-learn-Node-js-I-am-confused-about-it">
      <button className='c-button'>Learn More </button>
      </a>
    </div>
  )
}

export default Card
