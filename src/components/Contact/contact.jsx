import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fzfxbvk', 'template_hch6hez', form.current, 'AilNeJ2sMpjFofe_2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Thanks for reaching out! We will be in contact soon :)");
      e.target.reset();
  };

  return (
    <section id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <p className="contactDescription">Let's connect! </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" name="from_name" placeholder='Your Name'/>
            <input type="email" className="email" name="from_email" placeholder='Your Email'/>
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