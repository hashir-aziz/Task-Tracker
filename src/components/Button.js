import React from 'react'

export default function Button({text, color , onClick}) {
  return (
    
       <button className='btn' style={{backgroundColor:color}} onClick={onClick} >{text}
       </button>
    
  )
}
