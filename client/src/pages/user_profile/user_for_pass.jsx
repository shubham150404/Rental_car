import React from 'react'
import { useParams } from 'react-router-dom'


function User_for_pass() {
    
    return (
     <>
        <div className='container p-5'>
            <h1 className='d-flex justify-content-center bold pb-3'>Forgot password</h1>
            <form className=' p-5'>
                <div className="mb-3 mx-5 px-5 pb-3">
                    <label className="form-label">Email</label>
                    <input type="name" name='email'  className="form-control" id="exampleInputname1"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mx-5 px-5 pb-3">
                    <label className="form-label">Old password</label>
                    <input type="email" className="form-control" name='password' id="exampleInputEmail1"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mx-5 px-5 pb-3">
                    <label className="form-label">New password</label>
                    <input type="text" className="form-control" id="exampleInputNumber1" name='password'  aria-describedby="emailHelp" />
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn  btn-outline-dark" >Submit</button>
                </div>
            </form>
        </div>
     </>   
    )
}

export default User_for_pass
