import React from 'react'
import { BsFillArchiveFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import './admin_ex.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function Admin_center() {
    const [iserror, setiserror] = useState("");
    const [user, setuser] = useState([]);   
    const [datas, setmydata] = useState([])
    const [newcar, setnewcar] = useState([])
    const [order,setorder] = useState([])



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
    },[] )

    useEffect(() => {
        axios.get('http://localhost:3000/sell_car_find')
            .then((res) => setmydata(res.data.data))
            .catch(error => {
                { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
            });
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/new_car_find')
            .then((res) => setnewcar(res.data.data))
            .catch(error => {
                {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
            });
    },[])
    
    var  total = 0;
    // total+=price
    useEffect(() => {
        axios.get('http://localhost:3000/all_order')
            .then((res) => setorder(res.data.data))
            .catch(error => {
                {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
            });
    },[])
    return (
        <>

            <div className='width'>
                <div className='main '>
                    <div className='title p-5'>
                        <h3>DASH BOARD</h3>
                    </div>
                    <div className='d-flex row w-100'>
                        <div className='col-3 d-flex justify-content-center'>
                            <div className='box m-1 bg-success rounded'>
                                <div className='inner-box d-flex justify-content-around p-3'>
                                    <h4>Total User</h4>
                                    <BsFillArchiveFill className=' bash-icon'/>
                                </div>
                                <h3 className='p-4'>{user.length}</h3>
                            </div>
                        </div>
                        <div className='col-3 d-flex justify-content-center'>
                            <div className='box m-1 bg-info rounded'>
                                <div className='inner-box d-flex justify-content-around p-3'>
                                    <h4>Total car</h4>
                                    <BsFillArchiveFill className=' bash-icon'/>
                                </div>
                                <h3 className='p-4'>{newcar.length}</h3>
                            </div>
                        </div>
                        <div className='col-3 d-flex justify-content-center'>
                            <div className='box m-1 bg-warning rounded'>
                                <div className='inner-box d-flex justify-content-around p-3'>
                                    <h4>Request For Old Car's</h4>
                                    <BsFillArchiveFill className=' bash-icon'/>
                                </div>
                                <h3 className='p-4'>{datas.length}</h3>
                            </div>
                        </div>
                        {/* <div className='col-3 d-flex justify-content-center'>
                            <div className='box m-1 bg-warning rounded'>
                                <div className='inner-box d-flex justify-content-around p-3'>
                                    <h4>total For Old Car's</h4>
                                    <BsFillArchiveFill className=' bash-icon'/>
                                </div>
                                <h3 className='p-4'>{total}</h3>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin_center
