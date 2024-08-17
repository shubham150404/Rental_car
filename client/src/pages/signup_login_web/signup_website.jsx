import React from 'react'
import './style_of_web.css'
import user_icon from './photo/person.png'
import email_icon from './photo/email.png'
import password_icon from './photo/password.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/auth'

function Signup_website() {
    const data = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    }
    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth();
    const [inputDatasign, setinputDatasign] = useState(data)
    const [errors, seterror] = useState({})
    const [iserror, setiserror] = useState("");



    const handlinput = (e) => {
        setinputDatasign({ ...inputDatasign, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {

        try {
            e.preventDefault();
            const validationError = {}
            if (!inputDatasign.fname.trim()) {
                validationError.fname = "First Name is require"
            }
            if (!inputDatasign.lname.trim()) {
                validationError.lname = "Last Name is require"
            }
            if (!inputDatasign.email.trim()) {
                validationError.email = "Email is require"
            }
            if (!inputDatasign.password.trim()) {
                validationError.password = "password is require"
            } else if (inputDatasign.password.length < 10) {
                validationError.password = "password must be 10"
            }
            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {
            //     alert("welcome")
            // }
            axios.post('http://localhost:3000/user_create', inputDatasign)
                .then((res) => {
                    console.log(res.data.data)
                    console.log(res.data.user_token)
                    // localStorage.setItem('token_of_user', res.data.user_token)
                    storeTokenInLS(res.data.user_token)
                    navigate('/')
                })
                .catch(error => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                });
                // setinputDatasign({
                //     fname: "",
                //     lname: "",
                //     email: "",
                //     password: ""
                // });
            
            
        } catch (errors) {
            console.log('Error:', errors);
        }
    }
    return (
        <>
            <div className="container">
                <div className='signup_user signup_fixing_user'>
                    <h1 className='text-center pt-2'>Sign up</h1>
                    {iserror != "" && <h6 className='text-center text-danger mb-0 roboto'>***{iserror}***</h6>}
                    <div className='header_user'>
                        <form>
                            <div className='inputs_user mt-0'>
                                <div className='input_user mb-0'>
                                    <img src={user_icon} alt="" />
                                    <input value={inputDatasign.fname} onChange={handlinput} name='fname' type="text" placeholder='First Name' autoComplete='off' />
                                </div>
                                {errors.fname && <span className='text-danger seterror fnsz roboto'>***{errors.fname}***</span>}
                                <div className='input_user mt-2'>
                                    <img src={user_icon} alt="" />
                                    <input value={inputDatasign.lname} onChange={handlinput} name='lname' type="text" placeholder='Last Name' autoComplete='off' />
                                </div>
                                {errors.lname && <span className='text-danger seterror fnsz roboto'>***{errors.lname}***</span>}
                                <div className='input_user mt-2'>
                                    <img src={email_icon} alt="" />
                                    <input value={inputDatasign.email} onChange={handlinput} name='email' className="text-black " type="email" placeholder='Email' autoComplete='off' />
                                </div>
                                {errors.email && <span className='text-danger seterror fnsz roboto'>***{errors.email}***</span>}
                                <div className='input_user mt-2'>
                                    <img src={password_icon} alt="" />
                                    <input value={inputDatasign.password} onChange={handlinput} name='password' type="password" placeholder='*****' autoComplete='off' />
                                </div>
                                {errors.password && <span className='text-danger seterror fnsz roboto'>***{errors.password}***</span>}
                            </div>
                            <div className='submit_user  text-center d-flex mt-3'>
                                <button type="submit" className="btn text-white text-center" onClick={handlesubmit}>sign up</button>
                            </div>
                            <div className='d-flex justify-content-center pt-0 mt-0'>
                                <span>
                                    <Link to="/Website_Login" >
                                        <button type="submit" className="btn "><span className='forgot-password mt-0 pe-2'>Already have account</span>Log in</button>
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup_website
