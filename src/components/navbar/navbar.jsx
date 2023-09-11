import React from 'react'
import "./navbar.css"
import logo from '../../assets/home.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>Skills</Link>
            <Link className='desktopMenuListItem'>Project</Link>
            <Link className='desktopMenuListItem'>Contacts</Link>
        </div>
        <button className='desktopMenuBtn'>
            {/* <img src="" alt="" className='desktopMenuImg'/>  */}
            Contact Me
        </button> 
        
    </nav>
  )
}

export default Navbar