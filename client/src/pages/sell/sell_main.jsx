import React from 'react'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import Top from './top.jsx'
import Selling_form from './selling_form.jsx'
import Used_car from './used_car.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Sell_main() {
    const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
  }, [])
    return (
        <>
        <Header/>
        <Top/>
        <Selling_form/>
        <Used_car/>
        <Footer/>
        </>
    )
}

export default Sell_main
