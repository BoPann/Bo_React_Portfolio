import React, { useState } from 'react'
import "./navbar.css";
import logo from '../../assets/planeLogo.png';
import burgerLogo from '../../assets/burgerLogo.png';
import {Link} from 'react-scroll'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

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
        <img src={burgerLogo} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="burgerMenu" style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-100} duration={500} className='burgerItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-100} duration={500}className='burgerItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true}  offset={-100} duration={500}className='burgerItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true}  offset={-100} duration={500}className='burgerItem' onClick={()=>setShowMenu(false)}>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar