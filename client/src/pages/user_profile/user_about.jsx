import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import icon_header from '../../assets/icon_header.png'
import { useState, useEffect } from 'react'
import axios from 'axios'


function User_about({token_of_user}) {
    const [user, setuser] = useState()
    const [isUserUpdated, setisUserUpdated] = useState(false);
    const [iserror, setiserror] = useState("");

    const token = localStorage.getItem('token_of_user')
    useEffect(() => {
        const getprofiledata = async () => {
            try {
                // const  {data}  = await axios.get('http://localhost:3000/user_find_one', {
                const  data  = await axios.get('http://localhost:3000/user_find_one', {
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
                    {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)}
                    // setiserror(error.message);
                });
            } catch (err) {
                console.log( err );
            }
        }
        getprofiledata()
    }, [token_of_user])

    return (
        <>
            <div className='container p-0 m-0'>
                <div className='user_set_profile pt-5  rounded'>
                    <div className='user_photo d-flex justify-content-center pb-5'>
                        <img src={icon_header} alt="" className='h-25 w-25' />
                    </div>
                    {/* {iserror != "" &&<h2 className='text-center text-danger'>{iserror}</h2>} */}
                    {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                        <>
                            <div className='d-flex justify-content-around pt-5'>
                                <div className='use_'>
                                    <h5 className=''><span className='text-danger'>First name :-</span><span className='border-black border-bottom pb-2'> {user?.fname}</span></h5>
                                    <p></p>
                                    <p className='text-center'></p>
                                </div>
                                <div className='use_'>
                                    <h5 className=''><span className='text-danger'>Last name :-</span><span className='border-black border-bottom pb-2'>{user?.lname}</span></h5>
                                    <p></p>
                                    <p className='text-center'></p>
                                </div>
                            </div>
                            <div className='email_ text-center p-5'>
                                <h5 className=' '><span className='text-danger'>Email :- </span><span className='border-black border-bottom pb-2'>{user?.email}</span></h5>
                                <p className=' '></p>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default User_about
