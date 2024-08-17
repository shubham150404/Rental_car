import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import bmw from '../../assets/BMW_top.jpg'
import Mercedes1 from '../../assets/Mercedes1.jpg'
import './all_cars.css'
import Explore_body from '../explore/explore_body.jsx'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Bmw() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_user')) {
            navigate('/Website_Login')
        }
    }, [])
    const [datas, setMyData] = useState([]);
    const [iserror, setiserror] = useState("");

    const allData = () => {
        axios.get('http://localhost:3000/new_car_find')
            .then((res) => setMyData(res.data.data))
            .catch((error) => { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message)})    }
    let filtered = datas.filter((cur) => {
        return cur.name == 'Bmw'
    })
    useEffect(() => {
        allData()
    }, [])
    return (
        <>

            <div>
                <div className='sticky-top  top-0'>
                    <Header />
                </div>
                <div className=' position-relative top-0'>
                    <div className='txt_hd_set '>
                        <h1 className='text-center p-2 pt-5'>BMW INDIA</h1>
                        <h4 className='text-center'>"THE ULTIMATE DRIVING MACHINE"</h4>
                    </div>
                    <div className='mclaren_top'>
                        <img src={bmw} alt="" className='  img-fluid' />
                    </div>
                    <div className='exf2'>
                        <div className='container'>
                            <p className='text-start p-5'> BMWs slogan is one of the oldest around. The phrase was first coined in the 1970s as a way of targeting post-war baby boomers. Since then, BMW has tried to change it several times and failed. The BMW brand will forever be linked to this iconic slogan. </p>
                            <h4 className='text-center'>BMW <span className='text-danger bold'>CARS</span></h4>
                            {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                            {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                                <>
                                    <div className='pb-5 row'>
                                        {filtered.map((data) => {
                                            const { _id, name, price, Vehicle_Type, registration_year, Engine, photos, Ownership, style, Pickup_power, Doors, Drive, Seating_Capacity, Fuel, Kms_done, Exterior_Color, Interior_Color } = data;
                                            return (
                                                <>
                                                    <div className='p-3 col-3 '>
                                                        <div class="card_cars exf">
                                                            <img src={`http://localhost:3000/images/${photos}`} class="img-fluid img pb-3" alt="..." />
                                                            <div class="card-body">
                                                                <h5 className='text-center'>{name}</h5>
                                                                <h6 className='text-center '>{price}</h6>
                                                                <div className='d-flex justify-content-between'>
                                                                    <p class=" text-secondary ps-3 mb-0 pb-0">Vehicle Type</p>
                                                                    <p class=" text-secondary pe-3 mb-0 pb-0">FUEL TYPE</p>
                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <p class=" text-danger ps-3">{Vehicle_Type}</p>
                                                                    <p class=" text-danger pe-3">{Engine}CC</p>
                                                                </div>
                                                                <div className='set_bton d-flex justify-content-around pt-3'>
                                                                    <button type="button" className='btn btn-outline-success rounded-4 px-5'>
                                                                        <Link to={`/Car_Details/${_id}`} className="text-decoration-none text-dark">Detail's</Link></button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </>}
                        </div>
                        <Explore_body />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bmw