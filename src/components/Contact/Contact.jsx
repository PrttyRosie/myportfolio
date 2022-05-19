import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
function Contact() {
  return (
    <div className='section-container'>
      <Header 
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='contact-form-container'>
        <form className='contact-form' method='POST' action=''>
          <input type="emai" className='input-box email-input' placeholder='Your Email Id' name=''/>
          <textarea type="text" placeholder='Message' name='' className='input-box body-input'></textarea>
          <button type="submit" class="contact-btn">Send Email</button>
        </form>
      </div>
      <Footer 
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact