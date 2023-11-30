import React from 'react'

const EducationBox = (data) => {
    return (
        <div className={`education-container ${data.containerSide}`}>
        <img src={data.institutionLogo} alt="" />
            <div className="education-textbox">
                <h2>{data.institutionName}</h2>
                <small>{data.year}</small>
                <h3>{data.branch}</h3>
                <h4>{data.gradeType} : {data.grade}</h4>
                <span className={`${data.containerSide}-arrow`}></span>
            </div>
        </div>
    )
}

export default EducationBox