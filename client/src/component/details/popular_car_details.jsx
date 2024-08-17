import React from 'react'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
// import Mclaren_top from '../../assets/Mclaren_top.jpg'
import cars from './photos/car_icon.png'
import cal_icon from './photos/calender-icon.png'
import doors from './photos/doors.png'
import engine from './photos/engine-icon.png'
import exterior_color from './photos/exterior-color.png'
import fueltype_icon from './photos/fueltype-icon.png'
import kms_done from './photos/kms-done.png'
import peakpower_icon from './photos/peakpower-icon.png'
import peaktorque_icon from './photos/peaktorque-icon.png'
import profile_men from './photos/profile-men-icon.png'
import reg_year from './photos/reg_year.png'
import seating_capacity from './photos/seating-capacity.png'
import money from './photos/money.png'
import wheeldrive_icon from './photos/wheeldrive-icon.png'
import { useEffect } from 'react';
import { useState } from 'react';
import './car_details.css'
import { useParams } from 'react-router-dom/dist/index.js'
import axios from 'axios'
import { IoIosBasket } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


function Popular_car_details() {

    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token_of_user')) {
            navigate('/Website_Login')
        }
    }, [])
    const { id } = useParams()
    const options = [
        { label: "select", value: "" },
        { label: "Adajan", value: "adajan" },
        { label: "Katargam", value: "katargam" },
        { label: "Vesu", value: "vesu" }
    ]
    const [iserror, setiserror] = useState("");
    const token = localStorage.getItem('token_of_user')
    const [open, setopen] = useState(false);
    const handleClickBookCar = () => {
        setopen(!open)
        // open ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";
    };
    const [data, setdata] = useState({});
    useEffect(() => {
        const singledata = () => {
            axios.get(`http://localhost:3000/popular_car_findid/${id}`)
                .then((res) => {
                    setdata(res.data.data)
                })
                .catch((error) => {
                    { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    console.log(error);
                })
        }
        singledata()
    }, [])

    const [user, setuser] = useState()


    useEffect(() => {
        const getprofiledata = async () => {
            try {
                // const { data } = await axios.get('http://localhost:3000/user_find_one', {
                const data = await axios.get('http://localhost:3000/user_find_one', {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                    // console.log("DATA", data);
                    // setisUserUpdated(false)
                    // setuser(data.data);
                    .then((res) => {
                        setuser(res.data.data)
                    })
                    .catch(error => {
                        { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    });
            } catch (error) {
                setiserror(error.message);
                console.log({ error });
            }
        }
        getprofiledata()
    }, [])
    const [errors, seterror] = useState({})
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
    const [book, setBook] = useState({ pick: '', drop: '', date: '' });
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
        console.log(book)
    }
    const handleClick = (e) => {
        e.preventDefault();
        const validationError = {}
        if (!book.pick.trim()) {
            validationError.pick = "Pick up location is require"
        }
        if (!book.drop.trim()) {
            validationError.drop = "Drop location is require"
        }
        // if (!book.email.trim()) {
        //     validationError.email = "Email is require"
        // }
        // if (!book.number.trim()) {
        //     validationError.number = "Number is require"
        // } else if (book.number.length < 10) {
        //     validationError.number = "Number must be 10"
        // } else if (book.number.length > 10) {
        //     validationError.number = "Not more than 10"
        // }
        if (!book.date.trim()) {
            validationError.date = "Date is require"
        }
        seterror(validationError)
        if (Object.keys(validationError).length === 0) {

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onerror = () => {
                alert("RazorPay SDK failed to load");
            };
            script.onload = async () => {
                if (data.price) {
                    try {
                        // setLoading(true);
                        const result = await axios.post("http://localhost:3000/order_create", {
                            amount: Number(data?.price),
                            // amount:price,
                            headers: {
                                'Authorization': `${token}`
                            }
                        });
                        // console.log(result);
                        const { amount, id: orderId, currency } = result.data.order;
                        console.log(result.data, "from handle pay ");

                        const getkey = await axios.get("http://localhost:3000/order_key_find");
                        const key = getkey.data;
                        console.log(key.key, "second console inside handlepay");
                        const options = {
                            key: key.key,
                            amount: amount,
                            currency: currency,
                            name: "Book Car",
                            description: "Shubhu",
                            order_id: orderId,
                            handler: async function (response) {
                                const result = await axios.post("http://localhost:3000/pay_order", {
                                    amount: amount / 100,
                                    razorpayPaymentId: response.razorpay_payment_id,
                                    razorpay0rderId: response.razorpay_order_id,
                                    razorpaysighature: response.razorpay_signature,
                                    user: user,
                                    car: data,
                                    book: book

                                });
                                // fetchOrder();
                            },
                            prefill: {
                                name: "unique car",
                                email: "shubhampipaliya25@gmail.com",
                                contact: "7817853425",
                            },
                        };
                        // setLoading(false);
                        const paymentObject = new window.Razorpay(options);
                        paymentObject.open();
                    } catch (err) {
                        console.log(err);
                        setiserror(err.message);
                    }
                }
            };
            document.body.appendChild(script);
            setBook({ pick: '', drop: '', email: '', number: '', date: '' })
        }
    };
    return (
        <>
            <div className="details_page">
                <span className={open ? "buycar_saidbar collapse_buycar" : "buycar_saidbar"}>
                <div className='set_wd_25 h-100 position: absolute'>
                        <h1 className='d-flex justify-content-center bold pb-3 text-white'>Book car</h1>
                        <form className=' p-3 '>
                            <div className="mb-2 ">
                                <label className="form-label text-white">Pick up Point</label>
                                <select className='form-select bg-gray' name='pick' onChange={handleChange}>
                                    {options.map(option => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                {/* <input type="name" name='pick' className="form-control" id="exampleInputname1" value={book.pick} onChange={handleChange} aria-describedby="emailHelp" /> */}
                                {errors.pick && <span className='text-danger'>***{errors.pick}***</span>}
                            </div>
                            <br />
                            <div className="mb-2  ">
                                <label className="form-label text-white">Drop car Point</label>
                                <select className='form-select' name='drop' onChange={handleChange}>
                                    {options.map(option => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                {/* <input type="name" name='drop' className="form-control" id="exampleInputname1" value={book.drop} onChange={handleChange} aria-describedby="emailHelp" /> */}
                                {errors.drop && <span className='text-danger'>***{errors.drop}***</span>}
                            </div>
                            <br />
                            {/* <div className="mb-2 ">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' id="exampleInputEmail1" value={book.email} onChange={handleChange} aria-describedby="emailHelp" />
                                {errors.email && <span className='text-danger'>***{errors.email}***</span>}
                            </div> */}
                            {/* <div className="mb-2 ">
                                <label className="form-label">Number</label>
                                <input type="text" className="form-control" id="exampleInputNumber1"  name='number' value={book.number} onChange={handleChange} aria-describedby="emailHelp" />
                                {errors.number && <span className='text-danger'>***{errors.number}***</span>}
                            </div> */}
                            <input type="date" value={book.date} onChange={handleChange} name='date' min={new Date().toISOString().split('T')[0]} id="date"  max={maxDate.toISOString().split('T')[0]} />
                            <br />{errors.date && <span className='text-danger'>***{errors.date}***</span>}
                            <br />
                            <br />
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn  btn-outline-info" onClick={handleClick}>Submit</button>
                            </div>
                        </form>
                        <br />
                        <div className='container border-top '>
                            <p className='text-danger text-center text-uppercase'>Notes</p>
                        <p className='text-white text-center '>If you are cancel the car then you will not get money back</p>
                        </div>
                    </div>
                    <div className='set_wd_75 over_class position: absolute' onClick={() => setopen(!open)}></div>
                </span>
                <div className="details_header position-absolute w-100">
                    <Header />
                </div>
                <div className="details_body ">
                    <div className="det_header">
                        {iserror != "" ? <span></span> :
                            <img src={`http://localhost:3000/images/${data.image}`} alt="" className='img-fluid ' />
                        }
                    </div>
                    <div className="det_car_card container pt-5">
                        <h1>CAR SUMMARY</h1>
                        {/* <button type="button" className='btn btn-outline-dark ms-5 px-3' onClick={handleClick}><IoIosBasket className='me-3' />don't click</button> */}
                        <button type="button" className='btn btn-outline-dark ms-5 px-3' onClick={handleClickBookCar}><IoIosBasket className='me-3' />Book</button>
                        {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                        {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                            <>
                                <div className="cars_card_body">
                                    <div className="row pt-5">
                                        {/* company name */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded ">
                                                        <img src={cars} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Company Name</p>
                                                    <p className="fs-5 text-center bold">{data.name} Car</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* money */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={money} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Price</p>
                                                    <p className="fs-5 text-center bold">{data.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* car name */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={cars} alt="" srcset="" className="card_icon" />
                                                    </div>
                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Car Name</p>
                                                    <p className="fs-5 text-center bold">Artura India</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pickup_power */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={peakpower_icon} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Peak Power</p>
                                                    <p className="fs-5 text-center bold">{data.Pickup_power} RPM</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* registration_year */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={cal_icon} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Registration Year</p>
                                                    <p className="fs-5 text-center bold">{data.registration_year}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Doors */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={doors} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Doors</p>
                                                    <p className="fs-5 text-center bold">{data.Doors}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Engine */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={engine} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Engine</p>
                                                    <p className="fs-5 text-center bold">{data.Engine}CC</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fuel */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={fueltype_icon} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Fuel Type</p>
                                                    <p className="fs-5 text-center bold">{data.Fuel}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* vihical type  */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={peaktorque_icon} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Vehicle Type</p>
                                                    <p className="fs-5 text-center bold">{data.Vehicle_Type} </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* style */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={reg_year} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">style</p>
                                                    <p className="fs-5 text-center bold">{data.style} Car</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Ownership */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={profile_men} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Ownership</p>
                                                    <p className="fs-5 text-center bold">{data.Ownership} Owner</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Seating_Capacity */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={seating_capacity} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Seating Capacity</p>
                                                    <p className="fs-5 text-center bold">{data.Seating_Capacity} Seat</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Drive */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={wheeldrive_icon} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Drive</p>
                                                    <p className="fs-5 text-center bold">{data.Drive} Drive</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* kms done*/}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={kms_done} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">KMS done</p>
                                                    <p className="fs-5 text-center bold">{data.Kms_done} KM Done</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* interrior */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={exterior_color} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">Interior Color</p>
                                                    <p className="fs-5 text-center bold">{data.Interior_Color}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* external */}
                                        <div className="col-2">
                                            <div className="card_body_icon">
                                                <div className="pt-5  d-flex justify-content-center ">
                                                    <div className="img_set  d-flex justify-content-center  border rounded">
                                                        <img src={exterior_color} alt="" srcset="" className="card_icon" />
                                                    </div>

                                                </div>
                                                <div className="card_text">
                                                    <p className=" text-center pt-3 m-0">External Color</p>
                                                    <p className="fs-5 text-center bold">{data.Exterior_Color}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Popular_car_details
