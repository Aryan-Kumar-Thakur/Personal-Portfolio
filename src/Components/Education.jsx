import React from 'react'
import EducationBox from './EducationBox'
import collegeLogo from '../images/jssstu_logo.jpg'
import highSchoolLogo from '../images/KVSlogo.jpg'
import schoolLogo from '../images/Gbsss_logo.png'

const Education = () => {
    return (
        <>
            <div className="education-timeline">
                <EducationBox
                    institutionLogo={collegeLogo}
                    institutionName="JSS Science And Technology University (Formly SJCE)"
                    year="2021 - 2025"
                    branch="B.E in Information Science And Engineering"
                    gradeType="CGPA"
                    grade="9.61"
                    containerSide="left-container"  //for styling purpose
                />
                <EducationBox
                    institutionLogo={highSchoolLogo}
                    institutionName="XII (CBSE) | Kendriya Vidyalaya"
                    year="2020"
                    branch="PCM With Biology And Physical Education"
                    gradeType="Cum. Per"
                    grade="93.2%"
                    containerSide="right-container"  //for styling purpose
                />
                <EducationBox
                    institutionLogo={schoolLogo}
                    branch="Math Science Social Science Hindi And English"
                    year="2018"
                    institutionName="X (CBSE) | Govt. Boys Senior Secondary School No.1"
                    gradeType="Cum. Per"
                    grade="86.8%"
                    containerSide="left-container"  //for styling purpose
                />
            </div>
        </>
    )
}

export default Education