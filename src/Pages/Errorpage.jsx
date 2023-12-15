import React from 'react'
import errimg from '../images/404err.jpg'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
    const navigate = useNavigate();
  return (
    <div className="error-page">
        <img src={errimg} alt="This is error page" />
        <button className='errbtn' onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  )
}

export default Errorpage