import React from 'react'
import sedan from '../../assets/sedan.png'
import hybrid from '../../assets/hybrid.png'
import suv from '../../assets/suv.png'
import hatchback from '../../assets/hatchback.png'
import { Link } from 'react-router-dom'


function Varius_type() {
    return (
        <>
            <div className='container p-5'>
                <h3 className='p-5'>DISCOVER BY <span className='text-danger'>STYLE</span></h3>
                <div className='row'>
                    <div className="col-3">
                        <Link to="/Sedan_car_details" className='text-decoration-none text-dark'>
                        <div className='varius_type_body p-4'>
                            <div className='varius_type_heard d-flex justify-content-center'>
                                <img src={sedan} alt="" srcset="" />
                            </div>
                            <div className='varius_type_text pt-5'>
                                <h4 className='text-center'>sedan</h4>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-3">
                    <Link to="/Hybrid_car_details" className='text-decoration-none text-dark'>
                        <div className='varius_type_body p-4'>
                            <div className='varius_type_heard d-flex justify-content-center'>
                                <img src={hybrid} alt="" srcset="" />
                            </div>
                            <div className='varius_type_text pt-5'>
                                <h4 className='text-center'>Hybrid</h4>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-3">
                    <Link to="/Hatchback_car_details" className='text-decoration-none text-dark'>
                        <div className='varius_type_body p-4'>
                            <div className='varius_type_heard d-flex justify-content-center'>
                                <img src={hatchback} alt="" srcset="" />
                            </div>
                            <div className='varius_type_text pt-5'>
                                <h4 className='text-center'>hatchback</h4>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-3">
                    <Link to="/Suv_car_details" className='text-decoration-none text-dark'>
                        <div className='varius_type_body p-4'>
                            <div className='varius_type_heard d-flex justify-content-center'>
                                <img src={suv} alt="" srcset="" />
                            </div>
                            <div className='varius_type_text pt-5'>
                                <h4 className='text-center'>SUV</h4>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Varius_type
