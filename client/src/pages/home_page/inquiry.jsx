import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useAuth } from '../auth/auth';
import './hero.css'



function Inquiry() {
    const [iserror, setiserror] = useState("");

    const data = {
        name: "",
        email: "",
        number: ""
    }
    const [errors, seterror] = useState({})
    const [inputData, setinputData] = useState(data)
    const handleinput = (e) => {
        setinputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        try {
            e.preventDefault();
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
            }
            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {
            // }
            // if{validationError == "" &&}
            axios.post('http://localhost:3000/inquiry_create', inputData)
                .then(res => {
                    setinputData(res.data)
                    setinputData({
                        name: "",
                        email: "",
                        number: ""
                    });
                    { res.data && setiserror()}
                })
                .catch(error => {
                    {!error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message)} 
                });
        } catch (error) {
            console.log('Error:', error);
        }
    }
    return (
        <div className='cadf2'>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center bold pb-3'>Inquiry</h1>
                {/* {iserror != "" ? <span>{alert("thank you")}</span> : <span></span> } */}
                <form className='border p-5 cadf'>
                    {iserror != "" && <p className='text-center text-danger fs-2'>{iserror}</p>}
                    <div className="mb-3 mx-5 px-5 ">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' id="exampleInputNumber1" value={inputData.name} onChange={handleinput} aria-describedby="emailHelp" autoComplete='off' />
                        {errors.name && <span className='text-danger'>***{errors.name}***</span>}
                    </div>
                    <div className="mb-3 mx-5 px-5">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email'  id="exampleInputEmail1" value={inputData.email} onChange={handleinput} aria-describedby="emailHelp" autoComplete='off'  />
                        {errors.email && <span className='text-danger'>***{errors.email}***</span>}
                    </div>
                    <div className="mb-3 mx-5 px-5">
                        <label className="form-label">Number</label>
                        <input type="text" className="form-control" id="exampleInputNumber1" name='number' value={inputData.number} onChange={handleinput} aria-describedby="emailHelp" autoComplete='off' />
                        {errors.number && <span className='text-danger'>***{errors.number}***</span>}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn  btn-outline-dark" onClick={handlesubmit} >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Inquiry
