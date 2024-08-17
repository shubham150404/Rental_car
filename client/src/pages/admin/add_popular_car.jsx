import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Admin_ex from './admin_ex';
import './admin_ex.css'

function Add_popular_car() {
    const data = {
        name: "",
        price: "",
        Vehicle_Type: "",
        registration_year: "",
        Engine: "",
        image: null,
        Ownership: "",
        Torque: "",
        Pickup_power: "",
        Doors: "",
        Drive: "",
        Seating_Capacity: "",
        Fuel: "",
        Kms_done: "",
        Interior_Color: "",
        Exterior_Color: ""
    }

    const [inputData, setinputData] = useState(data)
    const [selectedFile, setSelectedFile] = useState(null);
    const [iserror, setiserror] = useState("");
    const [errors, seterror] = useState({})




    const handleinputs = (s) => {

        setinputData({ ...inputData, [s.target.name]: s.target.value })
    }
    const handlesubmits = (s) => {
        try {
            s.preventDefault();
            const validationError = {}
            if (!inputData.name?.trim()) {
                validationError.name = " Name is require"
            }
            if (!inputData.price?.trim()) {
                validationError.price = "Price  is require"
            }
            if (!inputData.Vehicle_Type?.trim()) {
                validationError.Vehicle_Type = "Vehicle Type is require"
            }
            if (!inputData.registration_year?.trim()) {
                validationError.registration_year = "registration year  is require"
            }
            if (!inputData.Vehicle_Type?.trim()) {
                validationError.Vehicle_Type = "Vehicle Type is require"
            }
            if (!inputData.Engine?.trim()) {
                validationError.Engine = "Engine  is require"
            }
            if(!inputData.image){
                validationError.image = "image  is require"
            }
            if (!inputData.Ownership?.trim()) {
                validationError.Ownership = "Ownership  is require"
            }
            if (!inputData.Torque?.trim()) {
                validationError.Torque = "Torque is require"
            }
            if (!inputData.Pickup_power?.trim()) {
                validationError.Pickup_power = "Pickup power is require"
            }
            if (!inputData.Doors?.trim()) {
                validationError.Doors = "Doors  is require"
            }
            if (!inputData.Drive?.trim()) {
                validationError.Drive = "Drive is require"
            }
            if (!inputData.Seating_Capacity?.trim()) {
                validationError.Seating_Capacity = "Seating Capacity is require"
            }
            if (!inputData.Fuel?.trim()) {
                validationError.Fuel = "Fuel Type is require"
            }
            if (!inputData.Kms_done?.trim()) {
                validationError.Kms_done = "how many Kms done is require"
            }
            if (!inputData.Interior_Color?.trim()) {
                validationError.Interior_Color = "Interior Color is require"
            }
            if (!inputData.Exterior_Color?.trim()) {
                validationError.Exterior_Color = "Exterior Color is require"
            }
            seterror(validationError)
            // if (Object.keys(validationError).length === 0) {
                const formData = new FormData()
                formData.append('image', selectedFile)
                Object.keys(inputData).forEach((key) => {
                    formData.append(key, inputData[key])
                })
                axios.post('http://localhost:3000/propular_car_create', formData)
                    .then(res => {
                        setinputData(res.data)
                        setinputData({
                            name: "",
                            price: "",
                            Vehicle_Type: "",
                            registration_year: "",
                            Engine: "",
                            image: null,
                            Ownership: "",
                            Torque: "",
                            Pickup_power: "",
                            Doors: "",
                            Drive: "",
                            Seating_Capacity: "",
                            Fuel: "",
                            Kms_done: "",
                            Interior_Color: "",
                            Exterior_Color: ""
                        });
                        { res.data && setiserror()}
                        { res.data && window.location.reload()}
                    })
                    .catch(error => {
                        { !error.response.data.message ? setiserror(error.message) : setiserror(error.response.data.message) }
                    });
                // setinputData({
                //     name: "",
                //     price: "",
                //     Vehicle_Type: "",
                //     registration_year: "",
                //     Engine: "",
                //     image: null,
                //     Ownership: "",
                //     Torque: "",
                //     Pickup_power: "",
                //     Doors: "",
                //     Drive: "",
                //     Seating_Capacity: "",
                //     Fuel: "",
                //     Kms_done: "",
                //     Interior_Color: "",
                //     Exterior_Color: ""
                // });
            // }
        } catch (err) {
            console.log('Error:', err);
        }
        // window.location.reload()
    }
    return (
        <>
            <div className=' p-0 m-0 '>
                <div className='d-flex saibar_set'>
                    <div className='col-2 p-0'>
                        <Admin_ex />
                    </div>
                    <div className='col-10 '>
                        <h1 className='p-5'>Add new popular car's</h1>
                        {iserror != "" && <h2 className='text-center text-danger'>{iserror}</h2>}

                        <div className='body_part d-flex justify-content-center'>
                            <form className='add-details py-3 shado_set f2_'>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3  ">
                                        <label className="form-label">Name</label>
                                        <input type="text" name='name' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' value={inputData.name} onChange={handleinputs} />
                                        {errors.name && <span className='text-danger seterror'>***{errors.name}***</span>}
                                    </div>
                                    <div className="px-3  ">
                                        <label className="form-label">Price</label>
                                        <input type="text" name='price' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' value={inputData.price} onChange={handleinputs} />
                                        
                                        {errors.price && <span className='text-danger seterror'>***{errors.price}***</span>}

                                    </div>

                                    <div className="px-3 ">
                                        <label className="form-label">registration year</label>
                                        <input onChange={handleinputs} value={inputData.registration_year} type="number" name='registration_year' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.registration_year && <span className='text-danger seterror'>***{errors.registration_year}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3  ">
                                        <label className="form-label">Engine</label>
                                        <input onChange={handleinputs} value={inputData.Engine} type="number" name='Engine' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Engine && <span className='text-danger seterror'>***{errors.Engine}***</span>}

                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Photo</label>
                                        <input onChange={(e) => setSelectedFile(e.target.files[0])} type="file" className="form-control" name='image' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.image && <span className='text-danger seterror'>***{errors.image}***</span>}
                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Ownership</label>
                                        <input onChange={handleinputs} value={inputData.Ownership} type="number" name='Ownership' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Ownership && <span className='text-danger seterror'>***{errors.Ownership}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3 ">
                                        <label className="form-label">Vehicle Type</label>
                                        <input onChange={handleinputs} value={inputData.Vehicle_Type} type="text" className="form-control" name='Vehicle_Type' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Vehicle_Type && <span className='text-danger seterror'>***{errors.Vehicle_Type}***</span>}

                                    </div>

                                    <div className="px-3 ">
                                        <label className="form-label">Pickup power</label>
                                        <input onChange={handleinputs} value={inputData.Pickup_power} type="text" className="form-control" name='Pickup_power' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Pickup_power && <span className='text-danger seterror'>***{errors.Pickup_power}***</span>}

                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Doors</label>
                                        <input onChange={handleinputs} value={inputData.Doors} type="number" name='Doors' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Doors && <span className='text-danger seterror'>***{errors.Doors}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3  ">
                                        <label className="form-label">Drive</label>
                                        <input onChange={handleinputs} value={inputData.Drive} type="number" name='Drive' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Drive && <span className='text-danger seterror'>***{errors.Drive}***</span>}

                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Seating Capacity</label>
                                        <input onChange={handleinputs} value={inputData.Seating_Capacity} type="number" className="form-control" name='Seating_Capacity' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Seating_Capacity && <span className='text-danger seterror'>***{errors.Seating_Capacity}***</span>}

                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Fuel</label>
                                        <input onChange={handleinputs} value={inputData.Fuel} type="text" name='Fuel' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Fuel && <span className='text-danger seterror'>***{errors.Fuel}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3  ">
                                        <label className="form-label">Kms done</label>
                                        <input onChange={handleinputs} value={inputData.Kms_done} type="number" name='Kms_done' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Kms_done && <span className='text-danger seterror'>***{errors.Kms_done}***</span>}

                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Interior Color</label>
                                        <input onChange={handleinputs} value={inputData.Interior_Color} type="text" className="form-control" name='Interior_Color' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Interior_Color && <span className='text-danger seterror'>***{errors.Interior_Color}***</span>}
                                        
                                    </div>
                                    <div className="px-3 ">
                                        <label className="form-label">Exterior Color</label>
                                        <input onChange={handleinputs} value={inputData.Exterior_Color} type="text" name='Exterior_Color' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Exterior_Color && <span className='text-danger seterror'>***{errors.Exterior_Color}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pb-3'>
                                    <div className="px-3  ">
                                        <label className="form-label">Torque</label>
                                        <input onChange={handleinputs} value={inputData.Torque} type="text" name='Torque' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                        {errors.Torque && <span className='text-danger seterror'>***{errors.Torque}***</span>}

                                    </div>
                                </div>
                                <div className='d-flex justify-content-center py-5 '>
                                    <button type="submit" className="btn btn-outline-dark px-4 py-2" onClick={handlesubmits}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_popular_car
