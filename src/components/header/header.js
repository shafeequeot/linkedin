import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './headerOptions';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@material-ui/core';
export default function header() {
    return (
        <div className="container">
            <div className='header'>
                <div className="left_header">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                    <div className="headSearch">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="right_header">
                        <HeaderOptions Icon={HomeIcon} title='Home' />
                        <HeaderOptions Icon={GroupsIcon} title='Net Work' />
                        <HeaderOptions Icon={WorkIcon} title='Jobs' />
                        <HeaderOptions Icon={MessageIcon} title='Messaging' />
                        <HeaderOptions Icon={NotificationsIcon} title='Notification' />
                        <Avatar src='http://shafeequeot.6te.net/assets/images/about-img.jpg' title='Me' />
                    <div>
                </div>

            </div>
        </div>


        </div>
    )
}
