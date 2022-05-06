import React from 'react'

function headerOptions({Icon, title}) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOptionIcon" />}
        <h3 className="headerOpitonTitle">{title}</h3>
    </div>
  )
}

export default headerOptions