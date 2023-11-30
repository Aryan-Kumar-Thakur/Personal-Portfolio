import React from 'react'


const Skillsbar = ({ skill, progress }) => {

    const afterstyle = {
        position: "absolute",
        content: `${progress}`,
        right: "0",
        top: "-25px",
        color: "#fff",
        background: "#000",
        fontSize: "12px",
        fontWeight: "500",
        padding: "1px 8px",
        borderRadius: "3px",
        width: "20px",
        height: "15px",
    }
    return (
        <div className="bar">
            <div className="info">
                <span>{skill}</span>
            </div>
            <div className="progress-line" data-percentage={`${progress}`}><span style={{ width: `${progress}` }}>
            <span style={afterstyle}>{`${progress}`}</span>
            </span></div>
        </div>
    )
}

export default Skillsbar