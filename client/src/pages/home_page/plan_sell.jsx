import React from 'react'
import buy from '../../assets/buy.png'
import cus from '../../assets/cus.png'
import jj from '../../assets/jj.png'
import time from '../../assets/time.png'
import cars from '../../assets/cars.jpg'
import './plan_sell.css'
import { Link } from 'react-router-dom'


function Plan_sell() {
    return (
        <>
            <div className='container'>
                <div className='row pt-5 pb-5'>
                    <div className='col-6'>
                        <div className=''>
                            <h4 className='bold pb-1'>PLANNING TO SELL?</h4>
                            <h4>SELL US YOUR CAR<br />IN 29 MINUTES.</h4>
                        </div>

                        <div className='double d-flex justify-content-around'>
                            <div className='pt-5  d-flex pe-5'>
                                <img src={buy} alt="" className=' pe-3'/>
                                <p className='m-0'>Outright <br /><span className='bold'>Sale</span></p>
                            </div>
                            <div className='pt-5 d-flex ps-5'>
                                <div className='img_box'> 
                                <img src={time} alt="" className='pe-3' />
                                </div>
                                <p className='m-0'>Best Offer <br /><span className='bold'>in 29 Minutes</span></p>
                            </div>
                        </div>
                        <div className='double d-flex justify-content-around mt-3 pt-4 '>
                            <div className='pt-5 ms-4 d-flex pe-5'>
                                <div className='img_box'> 
                                <img src={cus} alt="" className='pe-3' />
                                </div>
                                <p className='m-0'>7600+ Satisfied <br /><span className='bold'>Customers</span></p>
                            </div>
                            <div className='pt-5 d-flex ps-5 pe-5'>
                                <div className='img_box'> 
                                <img src={jj} alt="" className='pe-3' />
                                </div>
                                <p className='m-0'>Hassle Free <br /><span className='bold'>Processing</span></p>
                            </div>
                        </div>
                        <Link to="/sell" type="submit" className='btn btn-outline-dark m-5 px-5 py-3'>
                        Explore more
                        </Link>
                    </div>
                    <div className='col-6 '>
                    <img src={cars} alt="" className='img-fluid '/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan_sell
