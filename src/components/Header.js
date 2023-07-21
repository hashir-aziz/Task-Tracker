import React from 'react'
import Button from './Button'
import  PropTypes  from 'prop-types'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

export default function Header({title , onAdd, showAdd}) {
 
return (
  
   
  <header className='header'>
  <h1>{title}</h1>
  
  <Button  color={showAdd ? 'red ':'green'}
           text={showAdd ? 'close' : 'Add'}  
           onClick={onAdd}/>
  </header>
)
}

Header.prototype={
title:PropTypes.string,
}

