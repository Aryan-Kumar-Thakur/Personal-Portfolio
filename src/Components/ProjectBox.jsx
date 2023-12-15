import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    RojgarMitraDesc : "Developed user-friendly Full Stack Job Search Platform using Node.js and Express.js, deployed on Render.",
    RojgarMitraGithub : "https://github.com/Aryan-Kumar-Thakur/Rojgar-Mitra",
    RojgarMitraWebsite : "https://rojgarmitra.onrender.com/",

    WeatherVaniDesc : "A dynamic weatherforecasting weather app using Node.js , Express.js and openweather API, deployed on Render.",
    WeatherVaniGithub : "https://github.com/Aryan-Kumar-Thakur/Weather-Vani",
    WeatherVaniWebsite : "https://weathervani.onrender.com/",

    ProgrammingCommunityDesc:"Developed a fully responsive Front End of a WebApp for the Programming Community Socity of our college using ReactJS , deployed on github pages.",
    ProgrammingCommunityGithub:"https://github.com/Aryan-Kumar-Thakur/Programming-Community-WebApp",
    ProgrammingCommunityWebsite:"https://programming-community.vercel.app/",
    
    ServiceSiteDesc:"Developed a fully responsive Front End of a service App using ReactJS through which a person/organisation provide their services , deployed on github pages.",
    ServiceSiteGithub:"https://github.com/Aryan-Kumar-Thakur/ThakurServices",
    ServiceSiteWebsite:"https://aryan-kumar-thakur.github.io/ThakurServices/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox