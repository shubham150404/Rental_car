import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './propuler.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



function Propuler() {
    const [iserror, setiserror] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    const [datas, setmydata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/propular_car_find')
            .then((res) => setmydata(res.data.data))
            .catch((error) => { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message)})
    }, [])

    return (
        <>
            <div className='container-fluid f2'>
                <div className='container p-5 '>
                    <h4>POPULAR @</h4>
                    <h1>BIG BOY TOYZ </h1>
                </div>
                <div className='container '>
                    {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                    {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                        <>
                            <div className='pb-5 d-flex row '>
                                <Slider {...settings} >
                                    {datas.map((d) => {
                                        const { _id, name, image, price, registration_year, Kms_done, Engine, Vehicle_Type } = d;
                                        return (
                                            <>
                                                <div className='p-3 col-3 '>
                                                    <div class="card_car_pop " key={_id}>
                                                        <img src={`http://localhost:3000/images/${image}`} class="img-fluid imaag" alt="..." />
                                                        <div class="card-body">
                                                            <h5 className='text-center'><span className='border-black border-bottom'>{name}</span></h5>
                                                            <h6 className='text-center '>{price}</h6>
                                                            <div className='d-flex justify-content-between'>
                                                                <p class=" text-secondary ps-3 mb-0 pb-0 pe-3 border-black border-end">Vehicle Type</p>
                                                                <p class=" text-secondary pe-3 mb-0 pb-0 ">FUEL TYPE</p>
                                                            </div>
                                                            <div className='d-flex justify-content-between'>
                                                                <p class=" text-danger ps-3 ">{Vehicle_Type}</p>
                                                                <p class=" text-danger pe-3">{Engine}CC</p>
                                                            </div>
                                                            <div className='set_bton d-flex justify-content-around pt-3'>
                                                                <button type="button" className='btn btn-outline-success rounded-4 px-5 '>
                                                                    <Link to={`/Popular_car_details/${_id}`} className="text-decoration-none text-dark">Detail's</Link></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}




export default Propuler
