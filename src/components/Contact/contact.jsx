import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <p className="contactDescription">Let's connect! </p>
        <form action="" className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder='Your Email'/>
            <textarea name="message" className="msg" rows="10" placeholder='Your Message'></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
        </form>


        {/* <div className="links">
            <img src="" alt="" className="link" />
            <img src="" alt="" className="link" />
            <img src="" alt="" className="link" />
        </div> */}
    </section>
  )
}

export default Contact