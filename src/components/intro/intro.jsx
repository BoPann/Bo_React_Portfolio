import React from 'react';
import './intro.css';
import bg from '../../assets/bg.mp4'
//import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <video src={bg} className="bgVideo" autoPlay loop muted/>
        <div className="introContent">
            <span className="hello">Hello! </span>
            <span className="introText">I'm <span className="introName">Bo</span> <br />
            <span className='introTitle'>A Full Stack Developer</span></span>
            <p>Welcome to my site!</p>
            {/* <Link><button className="btn">About me</button></Link> */}
        </div>

    </section>


  )
}

export default Intro