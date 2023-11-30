import React from 'react'
import Skillsbar from './Skillsbar'
import Skillsarr from './Skillsarr'

const Skill = ({ skillCategory }) => {

    var selectedskill = Skillsarr.filter((value) => {
        return value.category === skillCategory;
    })

    console.log(selectedskill)

    return (
        <div className="skill-bar">
            {
                selectedskill.map((value, ind) => {
                    return (
                    <Skillsbar
                        key= {ind}
                        skill={value.skill}
                        progress={value.progress}
                    />
                    )
                })
            }
        </div>
    )
}

export default Skill