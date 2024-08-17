import React from 'react'
import './signup.css'
import user_icon from './photo/person.png'
import email_icon from './photo/email.png'
import password_icon from './photo/password.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
// import { Jwt } from 'jsonwebtoken'
// import { JwtHeader } from 'jsonwebtoken'



function Signup({ closemodel }) {
    const data = {
        name: "",
        email: "",
        password: ""
    }
    const navigate = useNavigate()
    const [inputDatasign, setinputDatasign] = useState(data)

    const handlinput = (e) => {
        setinputDatasign({ ...inputDatasign, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        try {
            e.preventDefault();
            axios.post('http://localhost:3000/user_create', inputDatasign)
                // .then((res) => setinputDatasign(res.data))
                .then((res) => {
                    console.log(res.data.data)
                    console.log(res.data.token_login)
                    alert("success")
                    localStorage.setItem('token_of_user', res.data.user_token)
                    navigate('/')
                })
            setinputDatasign({
                name: "",
                email: "",
                password: ""
            });
        } catch (error) {
            console.log('Error:', error);
        }
    }
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";

        };
    }, []);


    const [toggle, settoggle] = useState(1)
    const usertoggle = (id) => {
        settoggle(id)
    }

    // Login_user
    const dataL = {
        email: "",
        password: ""
    }

    const [inputDatalogin, setinputDatalogin] = useState(dataL)

    const handlinputL = (e) => {
        setinputDatalogin({ ...inputDatalogin, [e.target.name]: e.target.value })
    }

    const handlelogin = (e) => {
        try {
            e.preventDefault();
            axios.post('http://localhost:3000/login', inputDatalogin)
                .then((res) => {
                    console.log(res.data.data)
                    console.log(res.data.token_login)
                    alert("success")
                    localStorage.setItem('token_of_user', res.data.token_login)
                    navigate('/')
                })
            setinputDatasign({
                email: "",
                password: ""
            });
        } catch (error) {
            console.log('Error:', error);
        }
    }

    return (
        <>
            <div className='bgwrap'></div>
            <div className="container">
                <div className='signup signup_fixing'>
                    <div className=' close_icon text-danger ' onClick={closemodel}>
                        <IoClose className='clos_icon' />
                    </div>
                    <div className='header'>
                        <div className='texts d-flex gap-5'>
                            <button type="button" className='btn btn-outline-success hover_btn' onClick={() => usertoggle(1)}>sign up</button>
                            <button type="button" className='btn btn-outline-success hover_btn' onClick={() => usertoggle(2)}>Login</button>
                        </div>

                        <div class="together" >
                            <div className={toggle === 1 ? "show-user" : "sign"}>
                                <form  >
                                    <div className='inputs'>
                                        <div className='input'>
                                            <img src={user_icon} alt="" />
                                            <input value={inputDatasign.name} onChange={handlinput} name='name' type="text" placeholder='Name' autoComplete='off' />
                                        </div>
                                        <div className='input'>
                                            <img src={email_icon} alt="" />
                                            <input value={inputDatasign.email} onChange={handlinput} name='email' className="text-black " type="email" placeholder='email' autoComplete='off' />
                                        </div>
                                        <div className='input'>
                                            <img src={password_icon} alt="" />
                                            <input value={inputDatasign.password} onChange={handlinput} name='password' type="password" placeholder='password' autoComplete='off' />
                                        </div>
                                    </div>
                                    {/* <div className='forgot-password'><span>
                                        <Link to="/Login" >
                                            <button type="submit" className="btn login_"><span className='forgot-password pe-2'>Already have account</span>Log in</button>
                                        </Link>
                                    </span></div> */}
                                    <div className='submit mt-5 text-center d-flex'>
                                        <button type="submit" className="btn text-white text-center" onClick={handlesubmit}>
                                            {/* <Link to="/"> */}
                                            sign up
                                            {/* </Link> */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className={toggle === 2 ? "show-user mt-5 pt-2" : "sign"}>
                                <form  >
                                    <div className='inputs'>
                                        <div className='input'>
                                            <img src={email_icon} alt="" />
                                            <input value={inputDatalogin.email} onChange={handlinputL} name='email' className="text-black" type="email" placeholder='email' autoComplete='off' />
                                        </div>
                                        <div className='input'>
                                            <img src={password_icon} alt="" />
                                            <input value={inputDatalogin.password} onChange={handlinputL} name='password' type="password" placeholder='password' autoComplete='off' />
                                        </div>
                                    </div>
                                    {/* <div className='forgot-password'>
                                        <span>
                                            <Link to="/Login" >
                                                <button type="submit" className="btn login_"><span className='forgot-password pe-2'>Already have account</span>Log in</button>
                                            </Link>
                                        </span>
                                    </div> */}
                                    <div className='submit mt-5 text-center d-flex'>
                                        <Link to="/">
                                            <a type="submit" className="btn text-white text-center" onClick={handlelogin}>login</a>
                                        </Link>
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

export default Signup
