import React from 'react'
import Skill from '../Components/Skill'

const Skills = () => {
    return (
        <>
            <div className="skill-section">
            <div className="section1">
                    <div className='inner-section'>
                        <h1 className='heading'>Frontend Technologies</h1>
                        <Skill
                            skillCategory="frontend"
                        />
                    </div>
                    <div className='inner-section'>
                        <h1 className='heading'>Backend Technologies</h1>
                        <Skill
                            skillCategory="backend"
                        />
                    </div>
                </div>
                <div className="section2">
                    <div className='inner-section'>
                        <h1 className='heading'>Programming Languages</h1>
                        <Skill
                            skillCategory="languages"
                        />
                    </div>
                    <div className='inner-section'>
                        <h1 className='heading'>Tools</h1>
                        <Skill
                            skillCategory="tools"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills