import React from 'react'
import file from '../../assets/file.png'
import { FaCar } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import cus from '../../assets/cus.png'
import jj from '../../assets/jj.png'
import time from '../../assets/time.png'
import sport from '../../assets/sport.mp4'
import './explore.css'
import { Link } from 'react-router-dom'



function Explore() {
    return (
        <div className='container-fluid explore mt-3'>
            <div className='container '>
                <div className='row pt-5 pb-5'>
                    <div className='col-6'>
                        <div className=''>
                            <h2 className='bold text-white'>BROWSE BIG BOY TOYZ</h2>
                            <h2 className='text-white'>DATABASE OF NEW LUXURY<br />CARS IN INDIA.</h2>
                        </div>


                        <div className='pt-5 d-flex pe-5 '>
                            <div className='box_icon rounded '>
                                <ul className='list-unstyled  align-items-center justify-content-center d-flex'>
                                    <li className='seticon_of_ex '>
                                        <MdOutlineMessage className='fs-4 pe-1 pt-1'/>
                                    </li>
                                </ul>
                            </div>
                            <p className='m-0 text-white-50 ps-4'>Expert Review On Luxury Cars</p>
                        </div>
                        <div className='pt-3 d-flex pe-5'>
                            <div className='box_icon rounded'>
                                <ul className='list-unstyled  align-items-center justify-content-center d-flex'>
                                    <li className='seticon_of_ex '>
                                        {/* <img src={file} alt="" srcset="" className='img-fluid ' /> */}
                                        <FaCar className='fs-4 pe-1 pt-1'/>
                                    </li>
                                </ul>
                            </div>
                            <p className='m-0 text-white-50 ps-4'>Compare Your Favorite Cars</p>
                        </div>
                        <div className='pt-3 d-flex pe-5 '>
                            <div className='box_icon rounded'>
                                <ul className='list-unstyled align-items-center justify-content-center d-flex '>
                                    <li className='seticon_of_ex '>
                                        {/* <img src={file} alt="" srcset="" className='img-fluid ' /> */}
                                        <FaFileArchive className='fs-4 pe-1 pt-1'/>
                                    </li>
                                </ul>
                            </div>
                            <p className='m-0 text-white-50 ps-4'>More Than 317 Luxury Cars &<br />
                                It's In Depth Specifications</p>
                        </div>

                        <Link to="/explore" type="submit" className='btn btn-outline-secondary m-5 px-5 py-3'>
                            Explore more
                        </Link>
                    </div>
                    <div className='col-6'>
                        <video className='w-100 img-fluid fade-in explore' autoPlay loop muted>
                            <source src={sport} type='video/mp4' ></source>
                        </video>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Explore
