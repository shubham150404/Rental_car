import React from 'react'
import Center from './admin_center'
import Admin_ex from './admin_ex'




function Admin() {
    

    return (
        <div className='d-flex saibar_set'>
            <div className=' col-2'>
                <Admin_ex />
            </div>
            <div className=' col-10'>
                <Center />
            </div>
        </div>
    )
}

export default Admin
