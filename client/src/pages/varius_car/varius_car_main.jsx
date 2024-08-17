import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Varius_top from './varius_top.jsx'
import Varius_type from './varius_type.jsx'
import Varius_style from './varius_style.jsx'
import Varius_ex from './varius_ex.jsx'
import Varius_populer from './varius_populer.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import './varius_car.css'

function Varius_car_main() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_user')) {
            navigate('/Website_Login')
        }
    }, [])
    return (
        <>
            <div>
                <div className='variuscar_haed position-absolute top-0 w-100'>
                    <Header />
                </div>
                <div className='variuscar_top'>
                    <Varius_top />
                </div>
                <div className='vrf2'>
                    <div className='variuscar_types'>
                        <Varius_type />
                    </div>
                    <div className='variuscar_styles'>
                        <Varius_style />
                    </div>
                    <div className='variuscar_popular'>
                        <Varius_populer />
                    </div>
                    <div className='variuscar_'>
                        <Varius_ex />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Varius_car_main
