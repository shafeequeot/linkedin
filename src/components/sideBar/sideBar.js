import { Avatar } from '@mui/material'
import React from 'react'
import './sideBar.css'

function sideBar() {
    const recentItems = (Topic)=>{
        return(
        <div className="sideBaritems">
            <span className='sideBarHash'>#</span>
            <p>{Topic}</p>
        </div>
        )
    }

    return (
        <div className='sideBar'>
            <div className='sideBarTop'>
                <img src='https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' />
                <Avatar src='headerOptionIcon' />
                <h1>Profile Name</h1>
                <h4>React Developer</h4>
            </div>

            <div className='sideBarStats'>
                <div className='sideBarStat'>
                    <p> Connectons</p>
                    <p className='sideBarStatNumbers'> 1001</p>
                </div>

                <div className='sideBarStat'>
                    <p> Who vieved you profile</p>
                    <p className='sideBarStatNumbers'> 1001</p>

                </div>
            </div>
            <div className="sideBarBottum">
                <p>Recent</p>
                { recentItems('Programmer')}
                { recentItems('cable')}
                { recentItems('GraphicDesign')}
                { recentItems('ReactDeveloper')}
            

            </div>

        </div>
    )
}

export default sideBar