import React from 'react'

function inputOptions({color, Icon, title}) {
  return (
    <div className='feedInputItem'><Icon style={{color : color}}/>
    <p>{title}</p>
    </div>
  )
}

export default inputOptions