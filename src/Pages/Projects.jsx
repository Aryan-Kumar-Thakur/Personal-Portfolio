import React from 'react';
import ProjectBox from '../Components/ProjectBox';
import WeatherVaniImage from '../images/WeatherVaniImage.png';
import ProgrammingCommunityImage from '../images/ProgrammingCommunityImage.png';
import ServiceSiteImage from '../images/ServiceSiteImage.png';
import RojgarMitraImage from '../images/RojgarMitraImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RojgarMitraImage} projectName="RojgarMitra" />
        <ProjectBox projectPhoto={WeatherVaniImage} projectName="WeatherVani" />
        <ProjectBox projectPhoto={ProgrammingCommunityImage} projectName="ProgrammingCommunity" />
        <ProjectBox projectPhoto={ServiceSiteImage} projectName="ServiceSite" />
      </div>

    </div>
  )
}

export default Projects