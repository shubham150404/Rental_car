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


function Login_website() {
    const [iserror, setiserror] = useState("");

    const dataL = {
        email: "",
        password: ""
    }
    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth();
    const [inputDatalogin, setinputDatalogin] = useState(dataL)

    const handlinputL = (e) => {
        setinputDatalogin({ ...inputDatalogin, [e.target.name]: e.target.value })
    }

    const [errors, seterror] = useState({})


    const handlelogin = (e) => {
        try {
            e.preventDefault();
            const validationError = {}
            if (!inputDatalogin.email.trim()) {
                validationError.email = "Email is require"
            }
            if (!inputDatalogin.password.trim()) {
                validationError.password = "password is require"
            }
            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {
            //     alert("welcome")
            // }
            axios.post('http://localhost:3000/login', inputDatalogin)
                .then((res) => {
                    console.log(res.data.data);
                    storeTokenInLS(res.data.token_login);
                    // localStorage.setItem('token_of_user', res.data.token_login)
                    navigate('/');
                })
                .catch(error => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                });
            // setinputDatalogin({
            //     email: "",
            //     password: ""
            // });
        } catch (err) {
            console.log('Error:', err);
        }
    }
    return (
        <>
            <div className="container">
                <div className='login__user signup_fixing_user'>
                    <h1 className='text-center pt-4'>Log in</h1>
                    <div className='header_user'>
                        {iserror != "" && <h6 className='text-center text-danger mb-0  roboto'>***{iserror}***</h6>}
                        <form >
                            <div className='inputs_user mt-0'>
                                <div className='input_user'>
                                    <img src={email_icon} alt="" />
                                    <input value={inputDatalogin.email} onChange={handlinputL} name='email' className="text-black" type="email" placeholder='email' autoComplete='off' />
                                </div>
                                {errors.email && <span className='text-danger fnsz roboto'>***{errors.email}***</span>}
                                <div className='input_user mt-4'>
                                    <img src={password_icon} alt="" />
                                    <input value={inputDatalogin.password} onChange={handlinputL} name='password' type="password" placeholder='password' autoComplete='off' />
                                </div>
                                {errors.password && <span className='text-danger fnsz roboto'>***{errors.password}***</span>}
                            </div>
                            <div className='submit_user  text-center d-flex mt-3'>
                                <a type="submit" className="btn text-white text-center" onClick={handlelogin}>login</a>
                            </div>
                            <div className=' '>
                                <span className='d-flex justify-content-center'>
                                    <Link to="/Website_sign" >
                                        <button type="submit" className="btn  "><span className='forgot-password pe-2'>create new account</span><span className=''>Sign up</span></button>
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

export default Login_website