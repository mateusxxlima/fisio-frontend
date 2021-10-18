import React from 'react'

import './inputStyles.scss'

function Input({type,className, change}){
  return (
    <input type={type} onChange={(event) => change(event)} className={className}/>
  )
}

export default Input