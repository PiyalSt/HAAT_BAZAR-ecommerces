import React from 'react'
import assets from '../assets/assets'
import { TextField } from '@mui/material'
import CommonButton from '../components/CommonButton'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
    <>
        <section id='SignUpPage'>
            <div className='max-w-7xl mx-auto mt-15 mb-35 flex justify-between items-center'>
                <div className='w-8/12 '>
                    <div className='w-8/12'>
                        <img className='w-200' src={assets.loginImg} alt="Login Images" />
                    </div>
                </div>
                <div className='w-4/12 '>
                    <div className='flex flex-col gap-10 p-10'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-inter font-medium text-4xl text-text-2'>Create an account</h2>
                            <p className='font-inter font-normal text-base text-text-2'>Enter your details below</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <TextField sx={{color: 'red'}} variant='standard' label='Name' />
                            <TextField sx={{color: 'red'}} variant='standard' label='Email or Phone Number' />
                            <TextField sx={{color: 'black'}} variant='standard' label='Password' />
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            
                            <button className='w-full py-3 flex justify-center items-center gap-4 bg-secondary-2 text-white font-inter cursor-pointer rounded-sm'>
                                Login
                            </button>
                            <button className='w-full py-3 flex justify-center items-center gap-4 border-2 border-slate-300 rounded-sm cursor-pointer'>
                                <FcGoogle />
                                <p>Sign up with Google</p>
                            </button>
                            <p className='font-poppins font-normal text-base text-secondary-2 cursor-pointer'>Forget Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp
