import React from 'react'
import off_road from '../../assets/off_road.png'
import super_car from '../../assets/super_car.png'
import luxury from '../../assets/luxury.png'
import familycar_car from '../../assets/familycar-car-icon.png'
import ecofriendly_icon from '../../assets/ecofriendly-icon.png'
import familycar_icon from '../../assets/familycar-icon.png'
import performance_icon from '../../assets/performance-icon.png'
import supercar_icon from '../../assets/supercar-icon.png'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Varius_style() {
    return (
        <>
            <div className='container p-5'>
                <h3 className='p-5'>DISCOVER BY <span className='text-danger'>LIFESTYLE</span></h3>
                <div className='row'>
                    <div className="col-3">
                        <Link to="/Offroad_car_details" className='text-decoration-none'>
                            <div className='varius_body hee ms-4'>
                                <div className='varius_heard d-flex justify-content-center'>
                                    <img src={performance_icon} alt="" srcset="" />
                                </div>
                                <div className='varius_text pt-5'>
                                    <p className='text-center text-dark'>Off road</p>
                                </div>
                                <div className='varius_botom'>
                                    <img src={off_road} alt="" srcset="" className='he thar_set pe-5 me-5' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/Luxury_car_details" className='text-decoration-none'>
                            <div className='varius_body hee ms-4'>
                                <div className='varius_heard d-flex justify-content-center'>
                                    <img src={ecofriendly_icon} alt="" srcset="" />
                                </div>
                                <div className='varius_text pt-5'>
                                    <p className='text-center text-dark'>Luxury</p>
                                </div>
                                <div className='varius_botom'>
                                    <img src={luxury} alt="" srcset="" className='he super_car img-fluid h-25 w-100 pe-5 me-5 ' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/Super_car_details" className='text-decoration-none'>

                            <div className='varius_body hee ms-4'>
                                <div className='varius_heard d-flex justify-content-center'>
                                    <img src={supercar_icon} alt="" srcset="" className='w-75 h-25 ' />
                                </div>
                                <div className='varius_text pt-5'>
                                    <p className='text-center text-dark'>Super car</p>
                                </div>
                                <div className='varius_botom'>
                                    <img src={super_car} alt="" srcset="" className='he super_car img-fluid  pe-5 me-5' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/Family_car_details" className='text-decoration-none'>

                            <div className='varius_body hee ms-4'>
                                <div className='varius_heard border rounded-circle d-flex justify-content-center'>
                                    <img src={familycar_icon} alt="" srcset="" />
                                </div>
                                <div className='varius_text pt-5'>
                                    <p className='text-center text-dark'>Family car</p>
                                </div>
                                <div className='varius_botom'>
                                    <img src={familycar_car} alt="" srcset="" className=' he family_car img-fluid h-25 w-100  me-5' />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Varius_style
