import React from 'react'
import cart from '../../assets/Ferrari3.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';

function User_popular({ token_of_user }) {
    const [user, setuser] = useState()
    const [isUserUpdated, setisUserUpdated] = useState(false);
    var totalofprice = 0
    const token = localStorage.getItem('token_of_user')
    useEffect(() => {
        const getprofiledata = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/find_single_data', {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                console.log("DATA", data);
                setuser(data.data);
                setisUserUpdated(false)
            } catch (error) {
                console.log({ error });
            }
        }
        getprofiledata()
    }, [token_of_user])

    function deletebuy(id) {
        axios.delete(`http://localhost:3000/order_delete?id=${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        alert(id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
        window.location.reload()
    }
    return (
        <>
        {/* <img src={`http://localhost:3000/images/${item?.item.image}`} alt="" className=' w-100 rounded' /> */}
            <div className='container'>
                <h1 className='text-center p-5'>populer Car</h1>
                {user?.map((item) => {
                    
                    // {totalofprice =+ item?.price}
                    // alert(totalofprice)
                    // const { _id, name, price, Vehicle_Type, registration_year, Engine, photos, Ownership, style, Pickup_power, Doors, Drive, Seating_Capacity, Fuel, Kms_done, Exterior_Color, Interior_Color } = item;
                    return (
                        <>
                            <div className='bkc_center border mt-3 mb-3'>
                                <div className='d-flex row '>
                                    <div className='col-3'>
                                        <div className='pf_set_photo  p-3 '>
                                            <img src={`http://localhost:3000/images/${item?.item.image}`} alt="" className='w-100 rounded' />
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='cart_car_name d-flex align-items-center h-100 justify-content-center'>
                                            <p>{item?.price}</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='cart_car_price d-flex align-items-center h-100 justify-content-center'>
                                            <p>car price</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='cart_car_price pt-5 '>
                                            <button type="submit" className=' btn btn-outline-danger mb-2 px-3' onClick={() => deletebuy(item._id)}>Remove</button><br />
                                        </div>
                                    </div>
                                </div>

                           
                            </div>
                        </>
                    )
                })}
 <div className='d-flex align-items-end justify-content-end'>
                                {/* <h1>{totalofprice}</h1> */}
                            </div>
            </div>
        </>
    )
}

export default User_popular
