import React from 'react'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import backcar from '../../assets/volvo_top.jpg'
import { IoCarOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { RiListSettingsLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import './about.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function About() {
    const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
  }, [])
    return (
        <>
            <div className="about_page">
                <div className="about_header">
                    <Header />
                </div>
                <div className="about_body">
                    <div className="abo_header about-top d-flex justify-content-center">
                        <div className='abu'>
                            <h1 className='text-uppercase abus text-center '><span className='text-danger'>your</span> time is valuable</h1>
                            <h1 className='text-uppercase abuss py-2'><span className='text-secondary'>rigister your vehicle</span><span className='text-danger'> online</span></h1>
                            <h1 className='text-uppercase as py-1 text-center text-success'>and skip the wait at the dmv</h1>
                        </div>
                        <img src={backcar} alt="" className='img-fluid rea w-100 h-100' />
                    </div>
                    <h1 className='text-center text-uppercase p-5 m-5'>essay process</h1>
                    <div className='container-fluid p-0 m-0'>
                        <div className='full_body_color'>
                            <div className='container'>
                                <div className='row '>
                                    <div className='col-3 d-flex justify-content-center p-5'>
                                        <div className='make_box border p-3 rounded-4'>
                                            <div className='box_img ms-5 ps-2 mb-3'>
                                                <IoCarOutline className='fs-1 ' />
                                            </div>
                                            <div className='box_body'>
                                                <h5 className='text-center'>provide your</h5>
                                                <p className='text-center' >vehicale<br />vehicle information</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3 d-flex justify-content-center p-5'>
                                        <div className='make_box border p-3  rounded-4'>
                                            <div className='box_img ms-5 ps-2 mb-3'>
                                                <CiViewList className='fs-1 ' />
                                            </div>
                                            <div className='box_body'>
                                                <h5 className='text-center'>recive your list</h5>
                                                <p className='text-center' >vehicale<br />vehicle information</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3 d-flex justify-content-center p-5'>
                                        <div className='make_box border p-3 rounded-4'>
                                            <div className='box_img ms-5 ps-2 mb-3'>
                                                <RiListSettingsLine className='fs-1 ' />
                                            </div>
                                            <div className='box_body'>
                                                <h5 className='text-center'>your registration</h5>
                                                <p className='text-center' >vehicale<br />vehicle information</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3 d-flex justify-content-center p-5'>
                                        <div className='make_box border p-3  rounded-4'>
                                            <div className='box_img ms-5 ps-2 mb-3'>
                                                <ImProfile className='fs-1' />
                                            </div>
                                            <div className='box_body'>
                                                <h5 className='text-center'>recive digital</h5>
                                                <p className='text-center' >vehicale<br />vehicle information</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container m-5">
                        <div className='details_table p-5 rounded-4 text-center'>
                        <h2 class="mb-4">BIG BOY CAR, </h2>
                        <h4>a pre-owned luxury car dealer deals with 24 brands</h4>
                        <p class="mb-4">BDC started in 2022 as a benchmark model for the Pre-Used, or how we prefer to see it as,
                            Pre-Loved Car Brand. The mission was simple, direct and drove effect - delivering a new dimension of
                            luxury while standardising & raising platforms for the used car market in India.</p>

                        <p class="mb-5">Since our inception our primary aim has been our passion for delivering excellence which
                            became our mission. YOU (our patrons) are the driving force behind our company and making sure you get
                            the best is what we thrive on.</p>

                        <h2 class="mb-3">MISSION</h2>
                        <p>The journey began in 2009 when BBT was founded in New Delhi, India. Since then our mission has been to
                            provide quality exotic cars with highly personalized care at a competitive price. Creating a new
                            benchmark for excellence in every aspect of our business.</p>
                    </div>
                    </div>
                    <div className='map_set p-5'>
                        <div className='container'>
                            <h1 className='text-center'>Location</h1>
                            <div class="about-4 text-center p-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4585.308513942219!2d72.83228303450497!3d21.22972487811805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec6d9325017%3A0xab8743dcd16f39e5!2sLalita%20Chowkadi%2C%20Vishal%20Nagar%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1674399482519!5m2!1sen!2sin"
                                    width="900" height="450" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About
