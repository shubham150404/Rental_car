import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin_ex from './admin_ex';
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import './admin_ex.css';

function Admin_new_car() {
    const [user, setuser] = useState([]);
    const [iserror, setiserror] = useState("");
    const [refresh, setRefresh] = useState(true);
    const [model, setModel] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const token = localStorage.getItem('token_of_admin');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/new_car_find', {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                setuser(response.data.data);
            } catch (error) {
                if (error.response) {
                    setiserror(error.response.data.message);
                } else {
                    setiserror(error.message);
                }
            }
        };
        fetchData();
    }, [refresh, token]);



   


    const deleteProCar = (id) => {
        axios.delete(`http://localhost:3000/new_car_delete?id=${id}`)
            .then((res) => {
                setuser(res.data.data);
            })
            .catch((error) => {
                if (error.response) {
                    setiserror(error.response.data.message);
                } else {
                    setiserror(error.message);
                }
            });
    window.location.reload()

    };

    const updateProCar = (id, updatedData) => {
        axios.put(`http://localhost:3000/new_car_update?id=${id}`, updatedData)
            .then((res) => {
                console.log(res.data.data);
                setRefresh(!refresh);
                setModel(false);
            })
            .catch((error) => {
                console.log('Error:', error);
                setiserror(error.message);
            });
        };
        
        const Mymodel = ({ id }) => {

        const [data,setData] = useState({})
            console.log("Data",data)
        const [formData, setFormData] = useState({
            name: data?.name,
            price: data?.price,
            Vehicle_Type: data?.Vehicle_Type,
            registration_year: data?.registration_year,
            Engine: data?.Engine,
            photos: data?.photos,
            Ownership: data?.Ownership,
            style: data?.style,
            Pickup_power: data?.Pickup_power,
            Doors: data?.Doors ,
            Drive: data?.Drive,
            Seating_Capacity: data?.Seating_Capacity,
            Fuel: data?.Fuel,
            Kms_done: data?.Kms_done,
            Interior_Color: data?.Interior_Color,
            Exterior_Color: data?.Exterior_Color
                // Add other form fields here
            });


        useEffect(() => {
            const updateData = async () => {
                try {
                    const res = await axios.get(`http://localhost:3000/new_car_findid/${id}`)
                    setData(res.data.data);
                    console.log(res.data.data);
                } catch (error) {
                    {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)}
                }
            };
            updateData();
        },[id]);

        useEffect(()=>{
            data &&
            setFormData({
                name: data.name,
                price: data.price,
                Vehicle_Type: data.Vehicle_Type,
                registration_year: data.registration_year,
                Engine: data.Engine,
                photos: data.photos,
                Ownership: data.Ownership,
                style: data.style,
                Pickup_power: data.Pickup_power,
                Doors: data.Doors ,
                Drive: data.Drive,
                Seating_Capacity: data.Seating_Capacity,
                Fuel: data.Fuel,
                Kms_done: data.Kms_done,
                Interior_Color: data.Interior_Color,
                Exterior_Color: data.Exterior_Color
            })
        },[data])
        useEffect(() => {
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";
            return () => {
                document.body.style.overflowY = "scroll";
                document.body.style.overflowX = "scroll";
            };
        }, []);
     

        const handlesubmit = (e) => {
            e.preventDefault();
            updateProCar(id, formData);
        };

        return (
            <>
                <div className="model_cover" onClick={() => setModel(false)}></div>
                <div className="model_popup">
                    <div className="update_form p-2">
                        <form onSubmit={handlesubmit}>
                             <div className='d-flex justify-content-around py-1'>
                                 <div className="">
                                     <label className="form-label text-white ps-5 ms-5">Name</label>
                                     <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}  type="text" name='name' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-5 ms-5">Price</label>
                                     <input value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })}  type="text" name='price' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-2 ms-5">registration year</label>
                                     <input value={formData.registration_year} onChange={(e) => setFormData({ ...formData, registration_year: e.target.value })}  type="number" name='registration_year' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                             </div>
                             <div className='d-flex justify-content-around py-2'>
                                 <div className="">
                                     <label className=" form-label text-white ps-5 ms-5">Engine</label>
                                     <input value={formData.Engine} onChange={(e) => setFormData({ ...formData, Engine: e.target.value })}  type="number" name='Engine' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className="px-3  ">
                                     <label className="form-label text-white  ps-4 ms-5">life style</label>
                                     <input value={formData.style} onChange={(e) => setFormData({ ...formData, style: e.target.value })} type="text" name='style' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 {/* <div className="add_update ">
                                     <label className="form-label text-white ps-5 ms-5">Photo</label>
                                     <input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })}  type="file" className="form-control photo_upload" name='image' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div> */}
                                 
                                 <div className=" ">
                                     <label className="form-label text-white ps-4 ms-5">Ownership</label>
                                     <input value={formData.Ownership} onChange={(e) => setFormData({ ...formData, Ownership: e.target.value })}  type="number" name='Ownership' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                             </div>
                             <div className='d-flex justify-content-around py-2'>
                                 <div className="">
                                     <label className=" form-label text-white ps-4 ms-5">Vehicle Type</label>
                                     <input value={formData.Vehicle_Type} onChange={(e) => setFormData({ ...formData, Vehicle_Type: e.target.value })}  type="text" className="form-control" name='Vehicle_Type' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className=" add_update ">
                                     <label className="form-label text-white ps-3 ms-5">Pickup power</label>
                                     <input value={formData.Pickup_power} onChange={(e) => setFormData({ ...formData, Pickup_power: e.target.value })}  type="text" className="form-control " name='Pickup_power' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-4 ms-5">Doors</label>
                                     <input value={formData.Doors} onChange={(e) => setFormData({ ...formData, Doors: e.target.value })}  type="number" name='Doors' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />

                                 </div>
                             </div>
                             <div className='d-flex justify-content-around py-2'>
                                 <div className="">
                                     <label className=" form-label text-white ps-5 ms-5">Drive</label>
                                     <input value={formData.Drive} onChange={(e) => setFormData({ ...formData, Drive: e.target.value })}  type="number" name='Drive' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />

                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-2 ms-5">Seating Capacity</label>
                                     <input value={formData.Seating_Capacity} onChange={(e) => setFormData({ ...formData, Seating_Capacity: e.target.value })}  type="number" className="form-control" name='Seating_Capacity' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />

                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-5 ms-5">Fuel</label>
                                     <input value={formData.Fuel} onChange={(e) => setFormData({ ...formData, Fuel: e.target.value })}  type="text" name='Fuel' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                             </div>
                             <div className='d-flex justify-content-around py-2'>
                                 <div className="">
                                     <label className=" form-label text-white ps-3 ms-5">Kms done</label>
                                     <input value={formData.Kms_done} onChange={(e) => setFormData({ ...formData, Kms_done: e.target.value })}  type="number" name='Kms_done' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />

                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-3 ms-5">Interior Color</label>
                                     <input value={formData.Interior_Color} onChange={(e) => setFormData({ ...formData, Interior_Color: e.target.value })}  type="text" className="form-control" name='Interior_Color' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                                 <div className=" ">
                                     <label className="form-label text-white ps-3 ms-5">Exterior Color</label>
                                     <input value={formData.Exterior_Color} onChange={(e) => setFormData({ ...formData, Exterior_Color: e.target.value })}  type="text" name='Exterior_Color' className="form-control" id="exampleInputname1" aria-describedby="emailHelp" autoComplete='off' />
                                 </div>
                             </div>
                             <div className='d-flex justify-content-around py-2'>
                                 
                             </div>
                                 
                             <div className='d-flex justify-content-center py-3 '>
                                 <button type="submit" className="btn btn-outline-info px-4 py-2" >Submit</button>
                             </div>
        
                                {/* Add other form fields similarly */}
                            {/* </div> */}
                            
                        </form>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className=' p-0 m-0 '>
            <div className='d-flex saibar_set '>
                <div className='col-2 p-0'>
                    <Admin_ex />
                </div>
                <div className='col-10 full-body me-5 '>
                    <h1 className='p-5'>View New Car's</h1>
                    <div className='body_part p-3 '>
                        {iserror !== "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
                            <table className='shado_set f2_'>
                                <thead>
                                         <tr>
                                             <th>name</th>
                                             <th>price</th>
                                             <th>Vehicle_Type</th>
                                             <th>registration_year</th>
                                             <th>Engine</th>
                                             <th>photos</th>
                                             <th>Ownership</th>
                                             <th>life style</th>
                                             <th>Pickup_power</th>
                                             <th>Doors</th>
                                             <th>Drive</th>
                                             <th>Seating_Capacity</th>
                                             <th>Fuel</th>
                                             <th>Kms_done</th>
                                             <th>Exterior_Color</th>
                                             <th>Interior_Color</th>
                                             <th>Delete</th>
                                             <th>update</th>
                                         </tr>
                                </thead>
                                <tbody>
                                    {user.map((item) => {
                                        const { _id, name, price, Vehicle_Type, registration_year, Engine, photos, Ownership, style, Pickup_power, Doors, Drive, Seating_Capacity, Fuel, Kms_done, Exterior_Color, Interior_Color } = item;
                                        return (
                                            <tr key={_id}>
                                                        <td className='text-center'>{name}</td>
                                                        <td className='text-center'>{price}</td>
                                                        <td className='text-center'>{Vehicle_Type}</td>
                                                        <td className='text-center'>{registration_year}</td>
                                                        <td className='text-center'>{Engine}</td>
                                                        <td className="table_img d-flex justify-content-center">
                                                            <img src={`http://localhost:3000/images/${photos}`} alt="" />
                                                        </td>
                                                        <td className='text-center'>{Ownership}</td>
                                                        <td className='text-center'>{style}</td>
                                                        <td className='text-center'>{Pickup_power}</td>
                                                        <td className='text-center'>{Doors}</td>
                                                        <td className='text-center'>{Drive}</td>
                                                        <td className='text-center'>{Seating_Capacity}</td>
                                                        <td className='text-center'>{Fuel}</td>
                                                        <td className='text-center'>{Kms_done}</td>
                                                        <td className='text-center'>{Exterior_Color}</td>
                                                        <td className='text-center'>{Interior_Color}</td>
                                                <td className='px-4 py-1 but_del py-4 text-center'>
                                                    <button className='border-0 p-2 rounded bg-warning' onClick={() => deleteProCar(_id)}>
                                                        <AiFillDelete className='butt' />
                                                    </button>
                                                </td>
                                                <td className='px-4 py-1 but_del text-center'>
                                                    <button className='border-0 p-2 rounded bg-warning' onClick={() => {
                                                        setSelectedItemId(_id);
                                                        setModel(true);
                                                    }}>
                                                        <MdModeEdit className='butt' />
                                                    </button>
                                                </td>
                                                {model && selectedItemId === _id && <Mymodel id={selectedItemId} />}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin_new_car;







// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import Admin_ex from './admin_ex';
// import './admin_ex.css'
// import { AiFillDelete } from "react-icons/ai";
// import { CiEdit } from "react-icons/ci";


// function Admin_new_car() {
//     const [datas, setmydata] = useState([])
//     const [refresh,setRef] = useState(true)
//     const [iserror, setiserror] = useState("");

//     useEffect(() => {
//         axios.get('http://localhost:3000/new_car_find')
//             .then((res) => setmydata(res.data.data))
//             .catch(error => {
//                 {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
//             });
//     }, [refresh])

//     function deletenewcar(id) {
//         axios.delete(`http://localhost:3000/new_car_delete?id=${id}`,)
//             .then((res) => setmydata(res.data.data))
//             .catch(error => {
//                 {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
//             });
    
//     setRef(!refresh)
    
//     }
//     function updatenewcar(id) {
//         axios.put(`http://localhost:3000/new_car_update?id=${id}`)
//         // alert(id)
//             .then((res) => {
//                 setmydata(res.data.data)
//                 console.log(res.data.data);
//             })
//             .catch(error => {
//                 {!error.response.data.message ? setiserror(error.message)  : setiserror(error.response.data.message)   }
//             });
    
    
    
//     }
//     return (
//         <>
//                 <div className=' p-0 m-0 '>
//                     <div className='d-flex saibar_set'>
//                         <div className='col-2 p-0 d-block'>
//                             <Admin_ex />
//                         </div>
//                         <div className='col-10 d-block'>
//                             <h1 className='p-5'>View Car detail's</h1>
//                             <div className='body_parts p-3 '>
//                             {iserror != "" ? <h2 className='text-center text-danger'>{iserror}</h2> :
//                                 <>
//                                 <table className='shado_set f2_' >
//                                     <thead >
//                                         <tr>
//                                             <th>name</th>
//                                             <th>price</th>
//                                             <th>Vehicle_Type</th>
//                                             <th>registration_year</th>
//                                             <th>Engine</th>
//                                             <th>photos</th>
//                                             <th>Ownership</th>
//                                             <th>life style</th>
//                                             <th>Pickup_power</th>
//                                             <th>Doors</th>
//                                             <th>Drive</th>
//                                             <th>Seating_Capacity</th>
//                                             <th>Fuel</th>
//                                             <th>Kms_done</th>
//                                             <th>Exterior_Color</th>
//                                             <th>Interior_Color</th>
//                                             <th>Delete</th>
//                                             <th>update</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {datas?.map((d) => {
//                                             const { _id,name, price, Vehicle_Type, registration_year, Engine, photos, Ownership, style, Pickup_power, Doors, Drive, Seating_Capacity, Fuel, Kms_done, Exterior_Color, Interior_Color } = d;
//                                             // console.log(photos);
//                                             return (
//                                                 <tr className='pb-2'>
//                                                     <td className='text-center'>{name}</td>
//                                                     <td className='text-center'>{price}</td>
//                                                     <td className='text-center'>{Vehicle_Type}</td>
//                                                     <td className='text-center'>{registration_year}</td>
//                                                     <td className='text-center'>{Engine}</td>
//                                                     <td className="table_img d-flex justify-content-center">
//                                                         <img src={`http://localhost:3000/images/${photos}`} alt="" />
//                                                     </td>
//                                                     <td className='text-center'>{Ownership}</td>
//                                                     <td className='text-center'>{style}</td>
//                                                     <td className='text-center'>{Pickup_power}</td>
//                                                     <td className='text-center'>{Doors}</td>
//                                                     <td className='text-center'>{Drive}</td>
//                                                     <td className='text-center'>{Seating_Capacity}</td>
//                                                     <td className='text-center'>{Fuel}</td>
//                                                     <td className='text-center'>{Kms_done}</td>
//                                                     <td className='text-center'>{Exterior_Color}</td>
//                                                     <td className='text-center'>{Interior_Color}</td>
//                                                     <td className='px-4 py-1 but_del py-4 text-center'>
//                                                         <button className='border-0 p-2 rounded bg-warning' onClick={() => deletenewcar(_id)}>
//                                                             <AiFillDelete className='butt' />
//                                                         </button>
//                                                     </td>
//                                                     <td className='px-4 py-1 but_del text-center'>
//                                                         <button className='border-0 p-2 rounded bg-warning' onClick={() => updatenewcar(_id)}>
//                                                             <CiEdit className='butt' />
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             )
//                                         })
//                                         }
//                                     </tbody>
//                                 </table>
//                                 </>}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//     )

// }

// export default Admin_new_car
