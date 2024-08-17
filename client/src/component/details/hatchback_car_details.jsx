import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Hatchback_car_details() {
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
            .catch((error) => { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message)})

    }

    let filtered = datas.filter((cur) => {
        return cur.Vehicle_Type == 'hatchback'
    })
    console.log(datas);

    useEffect(() => {
        allData()
    }, [])
    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <div className='cadf2'>
                    <div className='container'>
                        <p className='text-start diff-cars-section p-5'>There is no finish line is used in an inspirational context: our work is never done. There's always a further, to which we can push things.</p>
                        <h4 className='text-center'>HATCHBACK CAR <span className='text-danger bold'>SUMMARY</span></h4>
                         {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                         {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> : <>
                        <div className='pb-5 d-flex row'>
                            {filtered.map((data) => {
                                const { _id, name, price, Vehicle_Type, registration_year, Engine, photos, Ownership, style, Pickup_power, Doors, Drive, Seating_Capacity, Fuel, Kms_done, Exterior_Color, Interior_Color } = data;
                                return (
                                    <>
                                        <div className='p-3 col-3 '>
                                            <div class="card_cars cadf2">
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
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Hatchback_car_details
