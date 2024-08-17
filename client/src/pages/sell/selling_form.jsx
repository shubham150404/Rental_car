import React from 'react'
import './selling_form.css'
import { useState } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";


function Selling_form() {
    const data = {
        name: "",
        email: "",
        number: "",
        brand: "",
        model: "",
        variant: "",
        photo: null,
        discription: ""

    }

    const [inputData, setinputData] = useState(data)
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, seterror] = useState({})
    const [iserror, setiserror] = useState("");





    const handleinputs = (s) => {
        setinputData({ ...inputData, [s.target.name]: s.target.value })
    }

    const handlesubmits = (s) => {
        try {
            s.preventDefault();
            const validationError = {}
            if (!inputData.name.trim()) {
                validationError.name = "Name is require"
            }
            if (!inputData.email.trim()) {
                validationError.email = "Email is require"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputData.email)) {
                validationError.email = 'Invalid email address'
              }
            if (!inputData.number.trim()) {
                validationError.number = "Number is require"
            } else if (inputData.number.length < 10) {
                validationError.number = "number must be 10"
            } else if (inputData.number.length > 10) {
                validationError.number = "not more than 10"
            }
            if (!inputData.brand.trim()) {
                validationError.brand = "brand is require"
            }
            if (!inputData.model.trim()) {
                validationError.model = "model is require"
            }
            if (!inputData.variant.trim()) {
                validationError.variant = "variant is require"
            }
            if(!inputData.photo){
                validationError.photo = "image  is require"
            }
            if (!inputData.discription.trim()) {
                validationError.discription = "discription is require"
            } else if (inputData.discription.length < 20) {
                validationError.discription = "discription must be 20"
            }

            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {

                const formData = new FormData()
                formData.append('photo', selectedFile)
                Object.keys(inputData).forEach((key) => {
                    formData.append(key, inputData[key])
                })
                axios.post('http://localhost:3000/sell_car_create', formData)
                .then(res => {
                    setinputData(res.data)
                    setinputData({
                        name: "",
                        email: "",
                        number: "",
                        brand: "",
                        model: "",
                        variant: "",
                        photo: null,
                        discription: ""
                    });
                    { res.data && setiserror()}
                    { res.data && window.location.reload()}
                })
                    .catch(error => {
                        { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                        // setiserror( error.response.data.message);
                    });
                // setinputData({
                //     name: "",
                //     email: "",
                //     number: "",
                //     brand: "",
                //     model: "",
                //     variant: "",
                //     photo: null,
                //     discription: ""
                // });
            // }
        } catch (err) {
            console.log('Error:', err);
        }
    }


    return (
        <div className='back-1'>
            <div className='container'>
                <h3 className='text-center text-dark pt-5'>AUTHORIZED LUXURY CAR BUYERS IN INDIA</h3>
                <h3 className='text-center text-dark pb-5'>BIG BOY TOYZ</h3>
                <div className='row'>
                    <div className='col-6 sell_car_arrow'>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>One of the biggest and <span className='text-danger'> most trusted</span> brand in the industry</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>Repeat business with every single client over the last<span className='text-danger'> 17 years</span></p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span><span className='text-danger'>Pan India</span> Presence</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span><span className='text-danger'>ZERO commitment</span> failures</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>Touching <span className='text-danger'>5 Million people</span> every month</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>10000 + <span className='text-danger'>Satisfied</span> Clients</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>Conclusion of the transaction <span className='text-danger'>within the same</span> working day</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>100% Payment<span className='text-danger'> Secured</span></p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>50% of the cars are <span className='text-danger'>booked</span> before they are ready</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span><span className='text-danger'>Fastest stock</span>Fastest stock turn around time in the industry</p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>Transparent and <span className='text-danger'> simple processes</span></p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>Not a single <span className='text-danger'>litigation</span> since <span className='text-danger'>inception</span></p>
                        <p className='border-bottom border-2 pb-3'><span className='text-danger pe-2'><FaArrowRightLong className='text-danger' /></span>A dedicated team of <span className='text-danger'>175 professionals </span> serving you 24x7</p>
                    </div>
                    <div className='col-6'>

                        <div className='container p-5'>
                            <form className='border  bg-white p-5 form_sell' method='post' action='Inquiry'>
                                {iserror != "" && <h4 className='text-center text-danger bold'>***{iserror}***</h4>}
                                <h4 className='d-flex justify-content-center bold pb-3'>CONTACT US</h4>
                                <div className="mb-3">
                                    <input onChange={handleinputs} value={inputData.name} type="text" className="form-control" name='name' placeholder='your name' id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                    {errors.name && <span className='text-danger'>***{errors.name}***</span>}

                                </div>
                                <div className="mb-3">
                                    <input onChange={handleinputs} value={inputData.email} type="email" className="form-control" name='email' placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'/>
                                    {errors.email && <span className='text-danger'>***{errors.email}***</span>}

                                </div>
                                <div className="mb-3">
                                    <input onChange={handleinputs} value={inputData.number} type="text" className="form-control" name='number' placeholder='mobile Number' id="exampleInputNumber1" aria-describedby="emailHelp" autoComplete='off' />
                                    {errors.number && <span className='text-danger'>***{errors.number}***</span>}

                                </div>
                                <span className='d-flex'>
                                    <div className="mb-3 pe-2">
                                        <input onChange={handleinputs} value={inputData.brand} type="text" className="form-control model" name='brand' placeholder='brand' id="exampleInputbrand" aria-describedby="emailHelp"  autoComplete='off'/>
                                        {errors.brand && <span className='text-danger'>***{errors.brand}***</span>}

                                    </div>
                                    <div className="mb-3 pe-2">
                                        <input onChange={handleinputs} value={inputData.model} type="text" className="form-control model" name='model' placeholder=' model' id="exampleInputmodel" aria-describedby="emailHelp" autoComplete='off'/>
                                        {errors.model && <span className='text-danger'>***{errors.model}***</span>}

                                    </div>
                                    <div className="mb-3">
                                        <input onChange={handleinputs} value={inputData.variant} type="text" className="form-control model" name='variant' placeholder='variant' id="exampleInputvariant" aria-describedby="emailHelp" autoComplete='off'/>
                                        {errors.variant && <span className='text-danger'>***{errors.variant}***</span>}

                                    </div>
                                </span>
                                <div className="mb-3">
                                    <input onChange={(e) => setSelectedFile(e.target.files[0])} type="file" className="form-control" placeholder='photo' name='photo' id="exampleInputphoto" aria-describedby="emailHelp" />
                                    {errors.photo && <span className='text-danger'>***{errors.photo}***</span>}

                                </div>
                                <div className="mb-3">
                                    <textarea name="discription" placeholder='message' onChange={handleinputs} value={inputData.discription} className="form-control" form="usrform" autoComplete='off'></textarea>
                                    {errors.discription && <span className='text-danger'>***{errors.discription}***</span>}

                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                    <button type="submit" className="btn  btn-outline-primary" onClick={handlesubmits}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selling_form
