import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'

function Po_car_details() {
    
    const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
  }, [])
    const [datas, setMyData] = useState([]);
    const [iserror, setiserror] = useState("");


    const allData = () => {
        axios.get('http://localhost:3000/propular_car_find')
            .then((res) => setMyData(res.data.data))
            .catch((error) => { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message)})

    }
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
                        <h4 className='text-center diff-cars-section p-5'>Popular car's <span className='text-danger bold'>SUMMARY</span></h4>
                        {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                        {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                            <>
                        <div className='pb-5 d-flex row'>
                            {datas.map((data) => {
                                const { _id, name, image, price, registration_year, Kms_done, Engine, Vehicle_Type } = data;
                                return (
                                    <>
                                        <div className='p-3 col-3 '>
                                            <div class="card_cars cadf">
                                                <img src={`http://localhost:3000/images/${image}`} class="img-fluid img pb-3" alt="..." />
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
                                                    <div className='set_bton d-flex justify-content-around pt-3 '>
                                                        <Link to={`/Popular_car_details/${_id}`} className="text-decoration-none text-dark">
                                                            <button type="button" className='btn btn-outline-success rounded-4 px-5'>
                                                                Detail's
                                                            </button>
                                                        </Link>
                                                        
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

export default Po_car_details
