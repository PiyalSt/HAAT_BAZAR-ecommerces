import React from 'react'
import assets from '../assets/assets'
import { TextField } from '@mui/material'
import CommonButton from '../components/CommonButton'

const Login = () => {
  return (
    <>
        <section id='LoginPage'>
            <div className='max-w-7xl mx-auto mt-15 mb-35 flex justify-between items-center'>
                <div className='w-8/12'>
                    <img className='w-200' src={assets.loginImg} alt="Login Images" />
                </div>
                <div className='w-4/12'>
                    <div className='flex flex-col gap-10 p-10'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-inter font-medium text-4xl text-text-2'>Log in to Exclusive</h2>
                            <p className='font-inter font-normal text-base text-text-2'>Enter your details below</p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <TextField sx={{color: 'red'}} variant='standard' label='Email or Phone Number' />
                            <TextField sx={{color: 'black'}} variant='standard' label='Password' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <CommonButton text={'Log In'} />
                            <p className='font-poppins font-normal text-base text-secondary-2 cursor-pointer'>Forget Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
