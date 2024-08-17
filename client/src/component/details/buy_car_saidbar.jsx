import React, { useState } from 'react'

function Buy_car_saidbar() {
    const [open,setopen]= useState(false);

     const handleClickBookCar = () =>{
        setopen(!open)
        alert("open & close")
    };
    return (
        <>  
            <div className={open?"buycar_saidbar collapse_buycar" : "buycar_saidbar"}>
                <h1 className='d-flex justify-content-center bold pb-3'>BOOK car</h1>
                <form className='border p-3 '>
                    <div className="mb-3 ">
                        <label className="form-label">First Name</label>
                        <input type="name" name='fname' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3  ">
                        <label className="form-label">Last Name</label>
                        <input type="name" name='lname' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Number</label>
                        <input type="text" className="form-control" id="exampleInputNumber1" name='number' aria-describedby="emailHelp" />
                    </div>
                    <select name="location" id="cars">
                        <option value=""></option>
                        <option value="vesu">vesu</option>
                        <option value="adajan">adajan</option>
                        <option value="katargam">katargam</option>
                        <option value="varachha">varachha</option>
                    </select>
                    <input type="date" id="date" min="2024-03-01" max="2024-06-30"/>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn  btn-outline-dark"  >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Buy_car_saidbar

