import React from 'react'

function headerOptions({Icon, Avatar, title}) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOptionIcon" />}
        {Avatar && (
          <Avatar className="headerOptionIcon" src = {Avatar}/>
        )}
        <h3 className="headerOpitonTitle">{title}</h3>
    </div>
  )
}

export default headerOptions