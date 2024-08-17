import React from 'react'
import background from '../../assets/explore.jpg'
import './explore.css'


function Explore() {
    return (
        <>
            <div className='container-fluid p-0 m-0 '>
                <div className='ex_texx position-absolute'>
                    <div className='text-seting'>
                        <h1 className='text-white text-center pt-5 '>FIND THE  RIGHT CAR <span className='text-danger'> RIGHT CAR</span></h1>
                        <p className='text-center text-white-50 fs-5 '>Your next car now cost's less</p>
                    </div>
                </div>
                <div className='exp_img_set'>
                    <img src={background} alt="" srcset="" className='img_not_set img-fluid h-100 position-relative' />
                </div>
            </div>

        </>
    )
}

export default Explore
