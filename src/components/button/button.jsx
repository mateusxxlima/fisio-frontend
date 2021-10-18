import React from "react";

import './buttonStyles.scss'

function Button({ label, className, callback }){
  return(
    <button onClick={
      (event) => {
        event.preventDefault()
        callback()
      }
    } className={`button ${className}`}>
      {label}
    </button>
  )
}

export default Button