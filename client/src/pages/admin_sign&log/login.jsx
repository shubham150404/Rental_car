import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
import email_icon from './photo/email.png'
import password_icon from './photo/password.png'
import { useState } from 'react'
import axios from 'axios';
import { IoClose } from "react-icons/io5";

function Login() {
    const [errors, seterror] = useState({})
    const [iserror, setiserror] = useState("");


    const data = {
        email: "",
        password: ""
    }

    const [inputData, setinputData] = useState(data)
    // const {storeTokenInLS} = Auth_of_admin();
    const navigate = useNavigate()


    const handleinput = (e) => {
        setinputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        try {
            e.preventDefault();
            const validationError = {}
            if (!inputData.email.trim()) {
                validationError.email = "Email is require"
            }
            if (!inputData.password.trim()) {
                validationError.password = "password is require"
            }
            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {
            //     alert("success")
            // }
            axios.post('http://localhost:3000/admin_login', inputData)
                .then((res) => {
                    console.log(res.data.data)
                    console.log(res.data.Admin_login_token)
                    alert("success")
                    // storeTokenInLS(res.data.Admin_login_token)
                    localStorage.setItem('token_of_admin', res.data.Admin_login_token)
                    navigate('/Admin')
                })
                .catch(error => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                });
            //     setinputData({
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
                <div className='sign_admin signup_fixing'>
                    <div className='head_admin'>
                        <p className='fs-3'>Admin <span className='text-danger'> Login</span></p>
                        {iserror != "" && <h6 className='text-center text-danger mb-0  roboto'>***{iserror}***</h6>}
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active form-are" id="signup">
                                <form>
                                    <div className='inputs_admin mt-0'>
                                        <div className='mb-4'>
                                            <div className='input_adm '>
                                                <img src={email_icon} alt="" />
                                                <input value={inputData.email} onChange={handleinput} name='email' className="text-black" type="email" placeholder='email' autoComplete='off' />
                                            </div>
                                            {errors.email && <span className='text-danger mb-3 roboto'>***{errors.email}***</span>}
                                        </div>
                                        <div className='input_adm'>
                                            <img src={password_icon} alt="" />
                                            <input value={inputData.password} onChange={handleinput} name='password' type="password" placeholder='password' autoComplete='off' />
                                        </div>
                                        {errors.password && <span className='text-danger roboto'>***{errors.password}***</span>}
                                    </div>
                                    {/* <div className='for_pass_admin'><span>
                                        <Link to="/signup" >
                                            <button type="submit" className="btn login__"><span className='forgot-password pe-2'>Already have account</span>Log in</button>
                                        </Link>
                                    </span></div> */}
                                    <div className='submit mt-5 text-center d-flex'>
                                        <button type="submit" className="btn text-white text-center" onClick={handlesubmit}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login
