import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"



const Contact = () => {

    const [formdata, setformdata] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        message: "",
    })
    const { fname, lname, email, mobile, message } = formdata;

    const form = useRef();

    const submitHandler = async (e) => {
        e.preventDefault()
        emailjs
            .sendForm(import.meta.env.VITE_REACT_APP_YOUR_SERVICE_KEY, import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_KEY, form.current, {
                publicKey: import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY,
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        try {
            const res = await fetch(import.meta.env.VITE_REACT_APP_DATABASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    mobile,
                    message
                })
            })
            toast.success("Thanks For Contacting Us , We Will Get Back To You Soon 😀")
            setformdata({
                fname: "",
                lname: "",
                email: "",
                mobile: "",
                message: "",
            })
        } catch (error) {
            toast.error("Error! please fill all the details carefully")
            console.log(error);
        }
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setformdata(prevstate => ({ ...prevstate, [name]: value }))
    }

    return (
        <div className="contactUs">
            <h1 className='title'>Get in Touch</h1>
            <div className='main-box'>
                <div className='contact'>
                    <div className='form'>
                        {/* form  */}
                        <form ref={form} onSubmit={submitHandler} method='POST'>
                            <div className="row50">
                                <div className="inputbox">
                                    <span>First Name</span>
                                    <input type="text" placeholder='John' name='fname' value={formdata.fname} onChange={inputHandler} />
                                </div>
                                <div className="inputbox">
                                    <span>Last Name</span>
                                    <input type="text" placeholder='Don' name='lname' value={formdata.lname} onChange={inputHandler} />
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputbox">
                                    <span>Email</span>
                                    <input type="email" placeholder='abcd1234@gmail.com' name='email' value={formdata.email} onChange={inputHandler} />
                                </div>
                                <div className="inputbox">
                                    <span>Mobile</span>
                                    <input type="mobile" placeholder='+91 987 654 3210' name='mobile' value={formdata.mobile} onChange={inputHandler} />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputbox">
                                    <span>Message</span>
                                    <textarea placeholder='Write your message here...' name='message' value={formdata.message} onChange={inputHandler}></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputbox">
                                    <input type="submit" value="Send" onChange={inputHandler} />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='info-map'>
                        {/* info  */}
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <div className='infoBox'>
                                <div>
                                    <span><FaLocationDot /></span>
                                    <p>Mysore,Karnataka <br /> India</p>
                                </div>
                                <div>
                                    <span><GrMail /></span>
                                    <a href="mailto:thakuraryan7678@gmail.com">thakuraryan7678@gmail.com</a>
                                </div>
                                <div>
                                    <span><FaPhoneAlt /></span>
                                    <a href="tel: +917678627412">+91 767 862 7412</a>
                                </div>
                                <ul className='sci'>
                                    <li><a href="#"><FaGithub /></a></li>
                                    <li><a href="#"><FaLinkedin /></a></li>
                                    <li><a href="#"><SiLeetcode /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* map  */}
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.
                            036809980996!2d76.6108084741945!3d12.31330802897064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
                            4f13.1!3m3!1m2!1s0x3baf7ae94fffffff%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20
                            Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1701352732362!5m2!1sen!2sin"
                                style={{ border: "0" }} allowFullScreen="" loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact