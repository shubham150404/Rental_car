import React from 'react'
import { useParams } from 'react-router-dom/dist/index.js'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Footer from '../../component/footer/footer.jsx'
import Header from '../../component/header/header.jsx'
import { Link, useNavigate } from 'react-router-dom'
import './admin_ex.css'
import User from '../../assets/token_user.jpg'


function User_buy_car() {
    const [iserror, setiserror] = useState("");
    const [user, setuser] = useState([]);
    const [data, setdata] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_user')) {
            navigate('/Website_Login')
        }
    }, [])

    const { id } = useParams()
    useEffect(() => {
        const singledata = () => {
            axios.get(`http://localhost:3000/user_buy_car/${id}`)
                .then((res) => setuser(res.data.data))
                .catch((error) => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    console.log(error.message);
                })
        }
        singledata()
    }, [])
    useEffect(() => {
        const userdata = () => {
            axios.get(`http://localhost:3000/find_user/${id}`)
                .then((res) => setdata(res.data.data))
                .catch((error) => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    console.log(error.message);
                })
        }
        userdata()
    }, [])
    return (
        <>
            <div className='container-fluid f2_token p-5'>
                <div className='token_photo position-absolute'>
                    <img src={User} alt="" srcset="" className='' />
                </div>
                <div className='container d-flex justify-content-center position-relative'>
                    <div className='token_user   '>
                        {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                            <>
                                <div className='m-3'>
                                    {/* <div className='d-flex'>
                                        <h5 className='ps-4 py-1'>First name:-</h5>
                                        <p className='pe-5 py-1'>{user.length > 0 && user[0].user.fname}</p>


                                        <h5 className='ps-5 py-1'>Last name:-</h5>
                                        <p className='pe-5 py-1'>{user.length > 0 && user[0].user.lname}</p>


                                        <h5 className='ps-5 py-1'>Email:-</h5>
                                        <p className='py-1'>{user.length > 0 && user[0].user.email}</p>
                                    </div> */}
                                    <div className='d-flex'>
                                        <h5 className='ps-4 py-1'>First name:-</h5>
                                        <p className='pe-5 py-1'>{data?.fname}</p>


                                        <h5 className='ps-5 py-1'>Last name:-</h5>
                                        <p className='pe-5 py-1'>{data?.lname}</p>


                                        <h5 className='ps-5 py-1'>Email:-</h5>
                                        <p className='py-1'>{data?.email}</p>
                                    </div>
                                </div>

                                <div className='container d-flex justify-content-center'>
                                    <table className=' '>
                                        <thead>
                                            <tr>
                                                <th className='px-5'>pick up</th>
                                                <th className='px-5'>drop</th>
                                                <th className='px-5'>Date</th>
                                                <th className='px-5'>Photo</th>
                                                <th className='px-5'>Price</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user?.map((item) => {
                                                return (
                                                    <tr className='' key={item._id}>
                                                        <td className='px-5 py-2'>{item.pick}</td>
                                                        <td className='px-5 py-2'>{item.drop}</td>
                                                        <td className='px-3 py-2'>{item.date}</td>
                                                        <td className='px-3 py-2 d-flex  justify-content-center'>
                                                        {item.item.image &&
                                                        <img src={`http://localhost:3000/images/${item?.item.image}`} alt="" className='w-100  rounded' />
                                                    }
                                                    <img src={`http://localhost:3000/images/${item?.item.photos}`} alt="" className='w-100 rounded' />
                                                            {/* {item.item.image &&
                                                                <img src={`http://localhost:3000/images/${item?.item.image}`} alt="" className='w-75  rounded' />
                                                            }
                                                            <img src={`http://localhost:3000/images/${item?.item.photos}`} alt="" className='w-75 rounded' /> */}
                                                            {/* <img src={`http://localhost:3000/images/${item.item.photos}`} alt="" className='token_user_photo' /> */}
                                                        </td>
                                                        <td className='px-5 py-2'>{item.price}</td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default User_buy_car
