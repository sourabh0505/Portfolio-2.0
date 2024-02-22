import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className='skillsContainer'>
        <div className="skillsHeading">
            <h1>SKILLS</h1>
            <h3>EXPLORE NOW</h3>
        </div>

        <div className="skillsInfo">

            <p>JavaScript</p>
            <div className="container">
                <div className="skills js">Advanced</div>
            </div>

            <p>HTML</p>
            <div className="container">
                <div className="skills html">Advanced</div>
            </div>
                
            <p>CSS</p>
            <div className="container">
                <div className="skills css">Advanced</div>
            </div>
                            
            <p>ReactJs</p>
            <div className="container">
                 <div className="skills React">Advanced</div>
            </div>

            <p>Bootstrap</p>
            <div className="container">
                 <div className="skills Bootstrap">Intermediate</div>
            </div>

            <p>MaterialUI</p>
            <div className="container">
                 <div className="skills MaterialUI">Intermediate</div>
            </div>

            <p>Redux</p>
            <div className="container">
                 <div className="skills Redux">Advanced</div>
            </div>

            <p>NextJs</p>
            <div className="container">
                 <div className="skills NextJs">Beginner</div>
            </div>

        </div>
    </div>
  )
}

export default Skills