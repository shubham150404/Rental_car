import React from 'react'
import './footer.css'
import logo from '../../assets/jr.png'
import payment from '../../assets/online-payment.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="container-fluid p-0 m-0 footer">
                <div className="container  p-5 ">
                    <div className="first-part d-flex justify-content-center">
                    <img src={logo} alt="" className='w-25'  />

                    </div>
                    <div className="mt-2 ">
                        <ul className="main list-unstyled d-flex justify-content-center m-0">
                        <li className="pe-2"><FaFacebook /></li>
                            <li className="pe-2"><FaInstagram /></li>
                            <li className="pe-2"><FaMapMarkedAlt /></li>
                            <li className="pe-2"><FaLinkedin /></li>
                            <li className="pe-2"><FaSquareXTwitter /></li>
                            <li className="pe-2"><FaYoutube /></li>
                            <li className="pe-2"><FaWhatsapp /></li>
                        </ul>
                    </div>

                    <p className="d-flex justify-content-center">© 2023 big boy toyz All Rights Reserved.</p>
                    <p className="d-flex justify-content-center">FAQ | Contact Us | Terms & Condition</p>
                    <div className="d-flex justify-content-center">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
