import { Avatar } from '@mui/material'
import React from 'react'
import './sideBar.css'

function sideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBarTop'>
                <div>
                    <img src='' alt='' />
                    <Avatar src='headerOptionIcon' />
                    <h1>Profile Name</h1>
                    <h4>React Developer</h4>
                </div>

                <div>
                    <div>
                        <p> Connectons</p>
                        <p> 1001</p>
                    </div>
                    <p>Grow your networks</p>
                </div>

                <div>
                    <p> Who vieved you profile</p>
                </div>

            </div>
        </div>
    )
}

export default sideBar