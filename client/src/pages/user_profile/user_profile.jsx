import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import { useState } from 'react'
import './user_.css'
import icon_header from '../../assets/icon_header.png'
import { useParams } from 'react-router-dom'
import User_saidbar from './user_saidbar'
import User_about from './user_about'
import User_for_pass from './user_for_pass'
import User_car_bk from './User_car_bk'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function User_profile() {
    const { activepages } = useParams()
    const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
  }, [])
    return (
        <>
            <div className='container-fluid p-0 m-0 f2'>
                <div className='set__header'>
                    <Header />
                </div>
                <div className='container'>
                    <div className='user_body d-flex w-100 justify-content-between'>
                        <div className='user_left bg-white'>
                            <div className='user_photo d-flex justify-content-center pb-2 pt-5  '>
                                <img src={icon_header} alt="" className='h-25 w-25' />
                            </div>
                            <h5 className='text-center bold text-uppercase pb-5'>profile setting</h5>
                            <User_saidbar activepages={activepages} />
                        </div>
                        <div className='user_right bg-white'>
                            {/* {activepages === '' && <User_for_pass />}  */}
                            {activepages === 'userabout' && <User_about />}
                            {activepages === 'bookcar' && <User_car_bk />}
                        </div>
                    </div>
                </div>
                <div className='set__footer'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default User_profile
