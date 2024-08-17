import React from 'react'
import Header from '../../component/header/header.jsx'
import Explore from './explore.jsx'
import Footer from '../../component/footer/footer.jsx'
import Explore_body from './explore_body'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Explore_main() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_user')) {
            navigate('/Website_Login')
        }
    }, [])
    return (
        <>
            <div className='explore_contant'>
                <div className=' position-absolute  w-100'>
                    <Header />
                </div>
                <div className='explore_set_photo'>
                    <Explore />
                </div>
                <div className='explore_body '>
                    <Explore_body />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Explore_main


