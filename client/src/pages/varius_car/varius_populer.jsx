import React from 'react'
import popular_car from '../../assets/popular_car.png'
import { Link } from 'react-router-dom'


function Varius_populer() {
    return (
        <>
            <div className='container p-5'>
                <h3 className='p-5'>DISCOVER <span className='text-danger'>POPULAR CAR'S</span></h3>
                <div className='var_propular_car '>
                    <div className=" ps-5 pt-5 ms-5 his">
                        <Link to="/Po_car_details" className='text-decoration-none'>
                            <div className='popular_body  ms-4 '>
                                <div className='popular_heard d-flex justify-content-center pb-3'>
                                    <img src={popular_car} alt="" srcset="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Varius_populer
