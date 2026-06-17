import React from 'react'
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa6'
import { Button, IconButton } from '@mui/material'
import assets from '../assets/assets'

const Card = () => {
  return (
    <>
        <div className='w-67.5 h-100.5 flex flex-col gap-4'>
            <div className='w-full h-65.5 bg-secondary rounded-sm flex items-center justify-center relative overflow-hidden group group'>

                <div className='absolute top-2 left-2 bg-secondary-2 text-white text-xs font-poppins font-medium px-4 py-2 rounded-sm'>-17%</div>
                <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <IconButton sx={{color: '#DB4444'}}>
                        <FaRegHeart className='text-secondary-2' />
                    </IconButton>
                    <IconButton sx={{color: '#DB4444'}}>
                        <FaRegEye className='text-secondary-2' />
                    </IconButton>
                </div>

                <img src={assets.products} alt="Product 01" />

                <div className='w-full absolute -bottom-10 group-hover:bottom-0 transition-all duration-300'>
                    <Button sx={{ backgroundColor: 'black', color: 'white', fontFamily: 'Poppins', fontWeight: 'medium', fontSize: '16px', px: 4, width: '100%', borderRadius: '4px' }}>Add To Card</Button>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='font-poppins font-medium text-base'>AK-900 Wired Keyboard</p>
                <div className='flex gap-4'>
                    <p className='font-poppins font-bold text-lg text-secondary-2'>$960</p>
                    <p className='font-poppins font-normal text-lg text-gray-500'><del>$1159</del></p>
                </div>
                <p className='flex items-center gap-1 text-sm text-gray-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className='text-sm text-gray-500'>(76)</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default Card
