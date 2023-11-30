import React from 'react';
import Education from '../Components/Education';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Aryan Thakur</b> and I am from Mysore, India.
            I'm a <b>MERN stack web developer</b> and a third year college student pursuing <b>BTech in ISE (Information Science And Engineering)</b>. <br/><br/>
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>

      <h1 className='Education-header'>Education</h1>

      <Education/>
      
        
        {/* <div className='sectionwise-skills'>
        <h1>Programming Languages</h1>
        <div className='skills'>
        <Skills skill='C++' />
        <Skills skill='Javascript' />
        </div>
        </div>

        <div className='sectionwise-skills'>
        <h1>Frameworks</h1>
        <div className='skills'>
        <Skills skill='Bootstrap'/>
        </div>
        </div>

        <div className='sectionwise-skills'>
        <h1>Technologies</h1>
        <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        </div>
        </div>

        <div className='sectionwise-skills'>
        <h1>Tools</h1>
        <div className='skills'>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        </div>
        </div> */}
        
    </>
  )
}

export default About