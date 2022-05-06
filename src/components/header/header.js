import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './headerOptions';

export default function header() {
    return (
        <div className="container">
            <div className='header'>
                <div className="left_header">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                    <div className="headSearch">
                        <SearchIcon />
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>

                <div className="right_header">
                <HeaderOptions title='abc' />

                </div>
            </div>


        </div>
    )
}
