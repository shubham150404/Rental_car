import React from 'react'
import cars from '../../assets/audi.png'
import { IoIosSettings } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

function Top() {
    return (
        <>
            <div className='container'>
                <div className='row sell-top pt-5 pb-5'>
                    <div className='col-6'>
                        <div className=''>
                            <h4 className='bold pb-1'>SELL YOUR LUXURY CAR  </h4>
                            <h4>WITHIN 29 MINUTES IN<br />3 EASY STEPS.</h4>
                        </div>
                        {/*  */}
                        <div className='pt-5 d-flex pe-5'>
                            <div className='box_icon border rounded d-flex'>
                                <ul className='list-unstyled d-flex align-items-center justify-content-center '>
                                    <li className='seticon_of_ex'><IoIosSettings className='fs-3 pt-2'/></li>
                                </ul>
                            </div>
                            <p className='m-0 text-dark ps-4'>151 <span className='bold'>Check Point</span></p>
                        </div>
                        <div className='pt-3 d-flex pe-5'>
                        <div className='box_icon border rounded d-flex'>
                                <ul className='list-unstyled d-flex align-items-center justify-content-center '>
                                    <li className='seticon_of_ex'><FaRegClock className='fs-3 pt-2'/></li>
                                </ul>
                            </div>
                            <p className='m-0 text-dark ps-4'>Get Offer <span className='bold'>in 29 Minutes</span></p>
                        </div>
                        <div className='pt-3 d-flex pe-5 '>
                        <div className='box_icon border rounded d-flex'>
                                <ul className='list-unstyled d-flex align-items-center justify-content-center '>
                                    <li className='seticon_of_ex'><FaUsers className='fs-3 pt-2'/></li>
                                </ul>
                            </div>
                            <p className='m-0 text-dark ps-4'>10000+ Satisfied <span className='bold'>Customers</span></p>
                        </div>
                        {/* <a href="https://web.whatsapp.com/" className='btn btn-outline-success m-5 px-4 py-3' type="submit" ><i className="fa-brands fa-whatsapp pe-3 fs-4"></i>CHAT ON WHATSAPP</a> */}
                    </div>
                    <div className='col-6 '>
                        <div className='back pt-5'>
                                <img src={cars} alt="" className='img-fluid ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top
