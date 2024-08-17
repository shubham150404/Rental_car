import React from 'react'
import './cart.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import cart from '../../assets/Ferrari3.jpg'
// import { userCartcontaxt } from './cart_context'
// import { createContext, useContext, useReducer, } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Cart() {
    // const addTocart = userCartcontaxt();
    // console.log(addTocart);
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
                <div className='container pt-5 pb-5'>
                    <div className='cart_center bg-white mb-3'>
                        <div className='d-flex row'>
                            <div className='col-3'>
                                <div className='bkc_set_photo  p-3 '>
                                    <img src={cart} alt="" className='w-100  rounded' />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='cart_car_name d-flex align-items-center justify-content-center'>
                                    <p >car name</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='cart_car_price d-flex align-items-center  justify-content-center'>
                                    <p>car price</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='cart_car_price pt-5 '>
                                    <button type="submit" className=' btn btn-outline-danger mb-2 px-3'>Remove</button><br />
                                    <button type="submit" className='btn btn-outline-success mb-2 px-4'>Details</button><br />
                                    <button type="submit" className='btn btn-outline-warning px-5'>Buy</button>
                                </div>
                            </div>
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

export default Cart

