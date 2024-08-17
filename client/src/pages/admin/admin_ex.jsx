import React from 'react'
import { BsCart3, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck } from 'react-icons/bs'
import { RiAdminFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import './admin_ex.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Admin_photo from '../../assets/admimn1.jpg'
import axios from 'axios';
import { FaCarSide } from "react-icons/fa6";
import { BsCarFrontFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";


function Admin_ex({ token_of_admin }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_admin')) {
            navigate('/Admin_Login')
        }

    }, [])
    const [open, setopen] = useState(false)
    const [sopen, ssetopen] = useState(false)
    const [iserror, setiserror] = useState("");
    const [user, setuser] = useState()
    const [isUserUpdated, setisUserUpdated] = useState(false);

    const token = localStorage.getItem('token_of_admin')
    useEffect(() => {
        const getprofiledata = async () => {
            try {
                const data = await axios.get('http://localhost:3000/admin_find_one', {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                    // console.log("DATA", data);
                    // setuser(data.data)
                    // setisUserUpdated(false)
                    .then((res) => {
                        setuser(res.data.data)
                    })
                    .catch(error => {
                        { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    });
            } catch (err) {
                console.log(err);
            }
        }
        getprofiledata()
    }, [token_of_admin])

    return (
        <>
            <div className='w-10'>
                <div className={open ? "saidbar open" : "saidbar"}>
                    {iserror != "" ? <h5 className='text-center text-danger'>***{iserror}***</h5> :
                        <>
                            <div className='head mb-5'>
                                <img src={Admin_photo} alt="" srcset="" className='head_img' /><br />
                                <p className='text-white'>Name <span className=''>:-{user?.name}</span></p>
                                <p className='text-white'>Email <span className=''>:-{user?.email}</span></p>
                            </div>
                        </>}
                    <div className=' pt-5 aa '>
                        <ul className='select-list list-unstyled border-top'>
                            <div className='yy '>
                                <Link to="/Admin" className='text-decoration-none text-white'>
                                    <li className='select-list-item p-3 '>
                                        <span className=''><FaHome className='icons text-white pe-2 ' />Admin Home </span>
                                    </li>
                                </Link>
                            </div>
                            <div className='yy '>
                                <Link to="/Admin_Inquiry" className='text-decoration-none text-white'>
                                    <li className='select-list-item p-3'>
                                        <span className=''><AiFillEdit className='icons text-white pe-2' /> Inquiry</span>
                                    </li>
                                </Link>
                            </div>
                            <div className='yy '>
                                <span className={open ? "selects open" : "selects"}>
                                    <li className='select-list-item pt-3 ps-3 pe-3 pb-2 ' onClick={() => setopen(!open)}>
                                        <Link to="" className='text-decoration-none text-white'>
                                            <div className='space'>
                                                <span className=''><FaCarSide className='icons text-white pe-2' />popular car</span> <span><FaAngleDown className='toggel' /></span>
                                            </div>
                                        </Link>
                                        <ul className='select-lists pt-2 list-unstyled saidbar-content '>
                                            <li className='select-list-items p-2 mb-2'>
                                                <Link to="/Admin_propular_car" className='text-decoration-none text-white'>
                                                    <BsListCheck className='icons text-white pe-2' />View Car's
                                                </Link>
                                            </li>
                                            <li className='select-list-items p-2'>
                                                <Link to="/Add_propular_car" className='text-decoration-none text-white'>
                                                    <MdAddAPhoto className='icons text-white pe-2' /> Add New car's
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </span>
                            </div>
                            <div className='yy '>
                                <span className={sopen ? "select open" : "select"}>
                                    <li className='select-list-item pt-3 ps-3 pe-3 pb-2' onClick={() => ssetopen(!sopen)}>
                                        <Link to="" className='text-decoration-none text-white'>
                                            <div className='space'>
                                                <span className=''><BsCarFrontFill className='icons text-white pe-2' />New Car</span> <span><FaAngleDown className='toggel' /></span>
                                            </div>
                                        </Link>
                                        <ul className='select-lists pt-2 list-unstyled saidbar-content '>
                                            <li className='select-list-items p-2 mb-2'>
                                                <Link to="/Admin_New_Car" className='text-decoration-none text-white'>

                                                    <BsListCheck className='icons text-white pe-2' />View Car's
                                                </Link>
                                            </li>
                                            <li className='select-list-items p-2'>
                                                <Link to="/Add_New_Car" className='text-decoration-none text-white'>
                                                    <MdAddAPhoto className='icons text-white pe-2' /> Add New car's
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </span>
                            </div>
                            <div className='yy '>
                                <li className='select-list-item p-3'>
                                    <Link to="/Admin_Selling_Car" className='text-decoration-none text-white'>
                                        <span className=''><GiTakeMyMoney className='icons text-white pe-2' />Sell Old car</span>
                                    </Link>
                                </li>
                            </div>
                            <div className='yy '>

                                <li className='select-list-item p-3'>
                                    <Link to="/Admin_User" className='text-decoration-none text-white'>
                                        <span className=''><FaUserPlus className='icons text-white pe-2' /> User</span>
                                    </Link>
                                </li>
                            </div>
                            <div className='yy border-top mt-5 mb-5'>
                                {/* () => { localStorage.removeItem('token_of_admin') } */}
                                <li className='select-list-item p-3  ' onClick={() => { localStorage.removeItem('token_of_admin') }}>
                                    <Link to="/Admin_User" className='text-decoration-none text-white'>
                                        <span className=''><AiFillEdit className='icons text-white pe-2' /> Logout</span>
                                    </Link>
                                </li>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Admin_ex