import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Admin_ex from './admin_ex';
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

function Admin_sell_car() {
    const [datas, setmydata] = useState([])
    const [iserror, setiserror] = useState("");


    useEffect(() => {
        axios.get('http://localhost:3000/sell_car_find')
            .then((res) => setmydata(res.data.data))
            .catch(error => {
                { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
            });
    }, [])

    function deletesellcar(id) {
        axios.delete(`http://localhost:3000/sell_car_delete?id=${id}`)
            .then((res) => setmydata(res.data.data))
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
                        <h1 className='py-5 text-center'>Customer sell own car with us</h1>
                        <div className='body_partss p-3 d-flex justify-content-center'>
                            {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                                <>
                                    <table className='shado_set f2_ '>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Number</th>
                                                <th>Brand</th>
                                                <th>Model</th>
                                                <th>Variant</th>
                                                <th>Photo</th>
                                                <th>Discription</th>
                                                <th className=''>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {datas?.map((d) => {
                                                const { _id, name, email, number, brand, model, variant, photo, discription } = d;
                                                return (
                                                    <tr  >
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{number}</td>
                                                        <td>{brand}</td>
                                                        <td>{model}</td>
                                                        <td>{variant}</td>
                                                        <td className="table_img d-flex justify-content-center ">
                                                            <img src={`http://localhost:3000/images/${photo}`} alt="" />
                                                        </td>
                                                        <td>{discription}</td>
                                                        <td className='px-4 py-1 but_del py-4 text-center '>
                                                            <button className='border-0 p-2 rounded bg-warning' onClick={() => deletesellcar(_id)}>
                                                                <AiFillDelete className='butt' />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }
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

export default Admin_sell_car
