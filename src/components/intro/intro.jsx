import React from 'react';
import './intro.css';
import bg from '../../assets/cat.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello! </span>
            <span className="introText">I am <span className="introName">Fatty <br />A CAT</span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, aspernatur. Eveniet tempore itaque suscipit voluptatem ut, assumenda explicabo voluptatum blanditiis, pariatur ipsa aliquam totam modi aliquid neque consequuntur placeat laborum.</p>
            <Link><button className="btn">Feed me</button></Link>
        </div>
        <img src={bg} alt="myPicture" className="bg" />
    </section>


  )
}

export default Intro