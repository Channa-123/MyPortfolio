import React from 'react'
import './Navbar.css'
import Toggles from '../Toggles/Toggles'
import {Link} from 'react-scroll'

function Navbar  ()  {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Channa</div>
            <Toggles />
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                      <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Works</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}> 
                    <li>Certificates</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Projects</li>
                    </Link>
                    {/* <Link spy={true} to='Testimonials' smooth={true} >
                    <li>Testimonials</li>
                    </Link> */}
                    
                </ul>
            </div>
            <button className='button  n-button'>
            < Link spy={true} to='Contact' id='Footer' smooth={true}>
                Contact
            </Link>
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
