import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Admin_ex from './admin_ex';
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { Link } from 'react-router-dom'




function Admin_user({ token_of_admin }) {

    const [user, setuser] = useState([])
    const [iserror, setiserror] = useState("");


    const token = localStorage.getItem('token_of_admin')

    useEffect(() => {
        const allData = async () => {
            try {
                const data = axios.get('http://localhost:3000/Ad_user_find', {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                    .then((res) => setuser(res.data.data))
                    .catch(error => {
                        { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    });
            } catch (err) {
                console.log({ err });
            }
        }
        allData()
    }, [token_of_admin])

    function deletenewcar(id) {
        axios.delete(`http://localhost:3000/user_delete?id=${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => setuser(res.data.data))
        .catch(error => {
            { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
        });
        window.location.reload()
    }

    return (
        <>
            <div className=' p-0 m-0 '>
                <div className='d-flex saibar_set'>
                    <div className='col-2 p-0'>
                        <Admin_ex />
                    </div>
                    <div className='col-10 p-0'>
                        <h1 className='py-5 text-center'>Website User</h1>
                        <div className='body_part p-3 d-flex justify-content-center'>
                            {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                                <>
                                    <table className='shado_set f2_ '>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Delete</th>
                                                <th>about</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user?.map((item) => {
                                                const { _id, fname, lname, email } = item;
                                                return (
                                                    <tr className='border-bottom' key={_id}>
                                                        <td className='px-4 py-1'>{fname}</td>
                                                        <td className='px-4 py-1'>{lname}</td>
                                                        <td className='px-4 py-1'>{email}</td>
                                                        <td className='px-4 py-1 but_del d-flex justify-content-center pe-auto'  >
                                                            <button className='border-0 p-2 rounded bg-warning pe-auto 'onClick={() => deletenewcar(_id)}>
                                                                <AiFillDelete className='butt' />
                                                            </button>
                                                        </td>
                                                        <td className='px-4 py-1 but_del  pe-auto'  >
                                                            <button className=' p-2 rounded  pe-auto btn btn-outline-success'>
                                                                <MdModeEdit className='butt' />
                                                                <Link to={`/User_buy_car/${_id}`} className=" text-decoration-none text-dark">Detail's</Link></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin_user
