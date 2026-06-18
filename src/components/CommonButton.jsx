import { Button } from '@mui/material'
import React from 'react'

const CommonButton = ({text, onClick}) => {
  return (
    <>
      <div onClick={onClick}>
        <Button sx={{backgroundColor: '#DB4444', color: 'white', padding: '12px 32px'}}>{text}</Button>
      </div>
    </>
  )
}

export default CommonButton
