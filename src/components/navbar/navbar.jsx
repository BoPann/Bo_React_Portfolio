import React from 'react'
import "./navbar.css"
import logo from '../../assets/home.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-100} duration={500}className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true}  offset={-100} duration={500}className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true}  offset={-100} duration={500}className='desktopMenuListItem'>Contacts</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            Contact Me
        </button> 
        
    </nav>
  )
}

export default Navbar