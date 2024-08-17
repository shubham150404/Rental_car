import React from 'react'
import './header.css'
import logo from '../../assets/jr.png'
import user_logo from '../../assets/icon_header.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Signup_home from '../verification/signup.jsx'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import User_about from '../../pages/user_profile/user_about.jsx'
import { useEffect } from 'react'


function Header() {

  const [value, setValue] = React.useState(null);
  const [model, setmodel] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
    // { !localStorage.getItem('token_of_user') && navigate('/Website_Login') }
  }, [])

  const closemodel = () => setmodel(false);
  const handleLogout = () => {
    localStorage.removeItem('token_of_user')
    window.location.reload()
  }
  return (
    <>
      <div className='head_ '>
        <div className='header-1'>
          <div className='hea'>
            <header>
              <nav className="navbar nav-position navbar-expand navbar-light   py-3">
                <div className="container">
                  <a className="navbar-brand w-25" href="/">
                    <img className="w-50" src={logo} alt="" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse w-50 navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 m-auto pe-5 mb-lg-0">
                      <li className="nav-item ">
                        <Link to="/" className='text-decoration-none text-white'>
                          <a className="nav-link hebo  px-4   text-white" aria-current="page" href="">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/explore" className='text-decoration-none text-white'>
                          <a className="nav-link  active hebo   text-white px-4 " aria-current="page"
                            href="">
                            explore
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/Varius_car_main" className='text-decoration-none text-white'>
                          <a className="nav-link  active hebo   text-white px-4 " aria-current="page"
                            href="">
                            varius car
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/sell" className='text-decoration-none text-white'>
                          <a className="nav-link active hebo  text-white px-4 " aria-current="page" href="/">
                            Sell
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link to="/about" className='text-decoration-none text-white'>
                          <a className="nav-link active hebo  text-white px-4 " aria-current="page" href="/">
                            about us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='d-flex nav-item'>
                      {/* <button type="submit" onClick={() => setmodel(true)} className='text-decoration-none btn btn-dark px-3 '>
                        <i className="fa-regular fa-user pe-2"></i>log in
                      </button> */}
                      <div className='set_ul' >
                        <ul className='list-unstyled '>
                          <li className='pt-4'>
                            <FaUser className='fs-3' />

                            <ul className='list-unstyled mt-3'>
                              <Link to="/User_profile/userabout" className='text-decoration-none text-white'>
                                <li className='L_i'><FaRegUserCircle /><span className='ps-2'>Profile</span></li>
                              </Link>
                              <li className='L_i' onClick={handleLogout}>
                                <CiLogout />
                                <span className='ps-2'>Logout</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      {/* <Link to="/Cart" >
                        <button type="submit" className='text-decoration-none btn mt-3'>
                          <IoCartOutline className='fs-1 text-white  p-0' />
                        </button>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
        {model && <Signup_home closemodel={closemodel} />}
      </div>
    </>
  )
}

export default Header
