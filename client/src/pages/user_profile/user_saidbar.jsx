import React from 'react'
import './user_.css'
import { FaUser } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { Link } from 'react-router-dom';

function User_saidbar({ pages }) {
    return (
        <>
            <div className='usersaidbar'>
                {
                    pages === 'userabout' ?
                        <div className='s2'>
                            <FaUser className='svg' /><span> Userprofile </span>
                        </div>
                        :
                        <Link to='/User_profile/userabout' className='text-decoration-none text-dark'>
                            <div className='s1'>
                                <FaUser className='svg' /><span> Userprofile </span>
                            </div>
                        </Link>
                }
                {
                    pages === 'bookcar' ?
                        <div className='s2'>
                            <IoCarSport className='svg' /><span> Book car </span>
                        </div>
                        :
                        <Link to='/User_profile/bookcar' className='text-decoration-none text-dark'>
                            <div className='s1'>
                                <IoCarSport className='svg' /><span> Book car </span>
                            </div>
                        </Link>

                }
                {/* {
                    pages === 'popular_car' ?
                        <div className='s2 '>
                            <TbPasswordMobilePhone className='svg' /><span>Popular Car</span>
                        </div>
                        :
                        <Link to='/User_profile/popular_car' className='text-decoration-none text-dark'>
                            <div className='s1'>
                                <TbPasswordMobilePhone className='svg' /><span>Popular Car</span>
                            </div>
                        </Link>
                } */}
            </div>
        </>
    )
}

export default User_saidbar
