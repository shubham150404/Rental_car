import React from 'react'
import red_car from '../../assets/red_car.png'
import diamond from '../../assets/diamond.png'

function Varius_ex() {
    return (
        <>
            <div className='container p-5'>
                <div className='extra pt-5'>
                    <div>
                        <h1 className='text-center'>LET'S KEEP IT <span className='text-danger'>SIMPLE</span></h1>
                        <h5 className='text-secondary text-center'>We are the best when it comes to Exotic Cars.</h5>
                    </div>
                    <div className="extra_body p-5">
                        <div className='row d-flex justify-content-center'>
                            <div className='col-3 border-end'>
                                <div className='ex_body d-flex '>
                                    <div className='img_ex_set d-flex align-items-center pe-3 '>
                                        <img src={diamond} alt="" />
                                    </div>
                                    <div className='ex_txt'>
                                        <h5 className='mb-0'>30</h5>
                                        <p className='text-secondary'>Luxury Car Brands</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 border-end'>
                                <div className='ex_body d-flex '>
                                    <div className='img_ex_set d-flex align-items-center pe-3 '>
                                        <img src={red_car} alt="" />
                                    </div>
                                    <div className='ex_txt'>
                                        <h5 className='mb-0'>180+</h5>
                                        <p className='text-secondary'>Exotic Cars</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 '>
                                <div className='ex_body d-flex '>
                                    <div className='img_ex_set d-flex align-items-center pe-3 '>
                                        <img src={diamond} alt="" />
                                    </div>
                                    <div className='ex_txt'>
                                        <h5 className='mb-0'>7600+</h5>
                                        <p className='text-secondary'>Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Varius_ex
