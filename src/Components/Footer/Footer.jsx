import React from 'react'
import './Footer.css'

import Instagram from '@iconscout/react-unicons/icons/uil-instagram-alt'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width: '100%'}}/>
        
        <div className='f-content'>
          <a href="https://mail.google.com/mail/u/1/?ogbl#inbox">
            <span> sadcprasad99@gmail.com</span>
          </a>
            <div className='f-icons'>
            <a href="https://www.instagram.com">
                <Instagram color='red' size='3rem' />
            </a>
            <a href="https://www.facebook.com">  
                <Facebook color='blue' size='3rem' />
            </a> 
            <a href="https://github.com/Channa-123"> 
                <Github color='black' size='3rem' />
            </a>
            <a href="https://web.whatsapp.com/">
                <Whatsapp color='green' size='3rem' />
            </a>
            <a href="https://www.linkedin.com/in/channa-prasad-95a5322a5">
                <Linkedin color='blue' size='3rem' />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
