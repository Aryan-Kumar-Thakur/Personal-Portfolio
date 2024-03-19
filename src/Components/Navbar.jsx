import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import { FaCogs } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

    const url = "https://drive.google.com/file/d/1kGyMb1KBby9yh45wdZu75s2rjiDqoy4g/view?usp=sharing"

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>AT</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li onClick={hideMenu}><Link to="/about"><BsPerson/> About</Link></li>
            <li onClick={hideMenu}><Link to="/skills"><FaCogs/> Skills</Link></li>
            <li onClick={hideMenu}><Link to="/project"><BsCodeSlash/> Project</Link></li>
            <li onClick={hideMenu}><Link to="/contact"><FiPhoneOutgoing/> Contact</Link></li>
            <li onClick={hideMenu}><a href={url} target='_blank'><CgFileDocument/> Resume</a></li>
        </ul>
        
    </nav>
  )
}

export default Nav