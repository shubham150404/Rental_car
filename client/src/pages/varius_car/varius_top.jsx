import React from 'react'
import varius_car_top from '../../assets/varius_car_top.jpg'
import './varius_car.css'

function Varius_top() {
    return (
        <>
            <div className="varius_page">
                <div className="varius_bodys">
                    <div className="var_header d-flex justify-content-center">
                        <div className='abbu'>
                            <div className='var_left'>
                                <h5 className='text-danger pb-3 bold'>FEATURED CAR</h5>
                                <p className='text-secondary'>BMW M340i is the most affordable <br />and First locally assembled BMW M <br /> Car in India.</p>
                            </div>
                            <div className='var_right border p-3'>
                            <p className='text-secondary'><span className='text-danger'>*  </span> Locally Assembled in India.</p>
                            <p className='text-secondary'><span className='text-danger'>*  </span> Baby BMW M3 Sports Sedan.</p>
                                    <p className='text-secondary'><span className='text-danger'>*  </span>Base Price Rs 62.90 Ex-showroom.</p>
                            </div>
                            
                        </div>
                        <img src={varius_car_top} alt="" className='img-fluid reala' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Varius_top
