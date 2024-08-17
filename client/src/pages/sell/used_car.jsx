import React from 'react'
import './used_car.css'
import { FaCarCrash } from "react-icons/fa";
import { FaHandcuffs } from "react-icons/fa6";
import { GiSpeedometer } from "react-icons/gi";
import { CiFileOff } from "react-icons/ci";
import { IoCarSport } from "react-icons/io5";
import { TbFileSettings } from "react-icons/tb";
import { FaHouseChimney } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa6";




function Used_car() {
    return (
        <>
            <div className='container p-5'>
                <h3 className='text-center bold p-5 '>BBT MANDATE CHECK FOR PURCHASING USED CAR</h3>
                <div className="row used_car">
                    <div className="col-3">
                        <div className='used_car_box border rounded '>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><FaCarCrash /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center pt-4'>No Accidental History</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><FaHandcuffs /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center'>No litigations</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><GiSpeedometer /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center'>No Odometer Tampering</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><CiFileOff /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center'>National Crime Record Check</p>
                        </div>
                    </div>
                    <div className="col-3 pt-5">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><IoCarSport /></a></li>
                                </ul>
                            </div>
                            <p className='text-center'>Model 2015 & above & KMS driven <br />less than 30,000 only.</p>
                        </div>
                    </div>
                    <div className="col-3 pt-5">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><TbFileSettings /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center'>Service History Check</p>
                        </div>
                    </div>
                    <div className="col-3 pt-5">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><FaHouseChimney /></a></li>
                                </ul>
                            </div>
                            <p className='pt-4 text-center'>Insurance History Check</p>
                        </div>
                    </div>
                    <div className="col-3 pt-5">
                        <div className='used_car_box border rounded'>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled used_car'>
                                    <li><a href="" className='text-decoration-none text-dark fs-1'><FaFileSignature /></a></li>
                                </ul>
                            </div>
                            <p className='text-center'>Physical Evaluation</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Used_car
