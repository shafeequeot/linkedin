import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './inputOptions'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
function posts({name, description, message, photoUrl}) {



  return (
    <div className='posts'>
        <div className="posterDetials">
            <Avatar />
            <div className="posterName">
                <h2>{name}</h2>
                <span>Thu 12 2022</span>
            </div>
        </div>
        <div className="post">
            {message}
        </div>
        <div className="postIconGroup">
        <InputOptions color="gray" Icon={ThumbUpAltIcon} title="Like"/>
        <InputOptions color="gray" Icon={MessageIcon} title="Comment"/>
        <InputOptions color="gray" Icon={ShareIcon} title="Share"/>
        <InputOptions color="gray" Icon={SendIcon} title="Send"/>

        </div>
    </div>
  )
}

export default posts