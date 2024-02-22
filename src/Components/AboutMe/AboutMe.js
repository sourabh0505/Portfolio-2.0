import React from 'react'
import './aboutMe.css'

function AboutMe() {
  return (
    <div className='aboutMeDiv' id='/aboutme'>
        <div className="aboutMeHeading">
            <h1>KNOW ME</h1>
            <h4>EXPLORE NOW</h4>
        </div>

        <div className="aboutMeInfo">
            <h4>Passionate frontend developer with a focus on crafting immersive and responsive user interfaces using cutting-edge technologies. Proficient in <span>JavaScript</span>, <span>React</span>, <span>HTML</span>, and <span>CSS</span>, I bring a keen eye for design and a commitment to creating seamless digital experiences.</h4>

            <h4>With a strong foundation in web development, I specialize in translating creative concepts into functional, user-friendly interfaces. Dedicated to staying abreast of industry trends and leveraging my skills to build dynamic and visually appealing websites.</h4>
        </div>
    </div>
  )
}

export default AboutMe