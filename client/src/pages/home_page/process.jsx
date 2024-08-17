import React from 'react'
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'
import './process.css'

function Process() {
    return (
        <div className=' p-5 process'>
            <h1 className='text-white p-5 d-flex  justify-content-center '>HOW IT WORKS</h1>
            <p className='text-secondary text-center'>Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple steps at Big Boy Toyz, <br />India's trusted used car portal.</p>
            <div className='row p-5'>
                <div className='col-3 '>
                    <div className='d-flex  justify-content-center '>
                        <img src={work1} alt="" srcset="" className='' />
                    </div>
                    <p className='text-white text-center pt-3'>BROWSE FROM OUR COLLECTION</p>
                </div>
                <div className='col-3 '>
                    <div className='d-flex  justify-content-center'>
                        <img src={work2} alt="" srcset="" />
                    </div>
                    <p className='text-white text-center pt-3'>GET TO KNOW YOUR RIDE</p>
                </div>
                <div className='col-3  '>
                    <div className='d-flex  justify-content-center'>
                        <img src={work3} alt="" srcset="" />
                    </div>
                    <p className='text-white text-center pt-3'>PAY & BOOK ONLINE OR VISIT SHOWROOM</p>
                </div>
                <div className='col-3 '>
                    <div className='d-flex justify-content-center'>
                        <img src={work4} alt="" srcset="" />
                    </div>
                    <p className='text-white text-center pt-3'>INSTANT PAYMENT & TRANSFER</p>
                </div>
            </div>
        </div>
    )
}

export default Process
