import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Admin_ex from './admin_ex';
import './admin_ex.css'
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import Admin from '../../assets/admin2.png';


function Admin_inquiry({ token_of_admin }) {
    // const [datas, setMyData] = useState([]);
    const [user, setuser] = useState([]);
    const [isUserUpdated, setisUserUpdated] = useState(false);
    const [iserror, setiserror] = useState("");
    const [refresh,setRef] = useState(true)



    const token = localStorage.getItem('token_of_admin')

    useEffect(() => {
        const allData = async () => {
            try {
                const data = axios.get('http://localhost:3000/inquiry_find', {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                // setuser(data.data)
                // setisUserUpdated(false)
                .then((res) => setuser(res.data.data))
                .catch(error => {
                    {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
                });
            } catch (err) {
                console.log(err.message);
            }
        }
        allData()
    }, [token_of_admin,refresh])

    function deleteinquiry(id) {
        axios.delete(`http://localhost:3000/inquiry_delete?id=${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch(error => {
                {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
            });
            setRef(!refresh)

    }

    return (
        <>
            <div className=' p-0 m-0  '>
                <div className='d-flex saibar_set'>
                    <div className='col-2 p-0'>
                        <Admin_ex />
                    </div>
                    <div className='col-10 p-0'>
                        <h1 className='py-5 text-center'>Inquiry for car's</h1>
                        <div className='body_part p-3 d-flex justify-content-center '>
                            {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                            {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                                <>
                                    <table className='shado_set f2_ '>
                                        <thead>
                                            <tr>
                                                <th className='px-5'>Name</th>
                                                <th className='px-5'>Email</th>
                                                <th className='px-5'>Number</th>
                                                <th className='px-5'>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user?.map((item) => {
                                                const { _id, name, email, number } = item;
                                                return (
                                                    <tr className='' key={_id}>
                                                        <td className='px-4 py-1'>{name}</td>
                                                        <td className='px-4 py-1'>{email}</td>
                                                        <td className='px-4 py-1'>{number}</td>
                                                        <td className='px-4 py-1 but_del d-flex justify-content-center pe-auto' onClick={() => deleteinquiry(_id)} >
                                                            <button className='border-0 p-2 rounded bg-warning pe-auto '>
                                                                <AiFillDelete className='butt' />
                                                            </button>
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


export default Admin_inquiry
