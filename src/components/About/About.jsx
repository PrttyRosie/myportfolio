import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading="Full Stack Engineer | Blogger">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Developer</h3>
            <p className='about-sub-heading-details'>
              I’m a <u>Frontend Developer</u>. building software for people and businesses. I love building websites that gives aethetics definition and add value to society through technology.
            </p>
            <h3 className='about-sub-heading'>Artist</h3>
            <p className='about-sub-heading-details'>
              I've been drawing since then and I incorporatetalent and creativity in technology to boost my creativity even more.
            </p>
        </div>
        <div className='about-main-right'>
            <img
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About