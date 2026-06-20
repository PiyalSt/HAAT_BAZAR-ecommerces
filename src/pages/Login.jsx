import React, { useState } from 'react'
import assets from '../assets/assets'
import { TextField } from '@mui/material'
import CommonButton from '../components/CommonButton'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router'

const Login = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handleLogin = () => {
        if(!email) {
            toast.error('Please enter your email')
            setEmailError(true)
            return
        }
        if(!password) {
            toast.error('Please enter your password')
            setPasswordError(true)
            return
        }

        toast.success('Login Successfully')
    }

  return (
    <>
        <section id='LoginPage'>
            <div className='max-w-7xl mx-auto mt-15 mb-35 flex justify-between items-center gap-10'>
                <div className='w-6/12'>
                    <img className='w-200' src={assets.loginImg} alt="Login Images" />
                </div>
                <div className='w-6/12'>
                    <div className='flex flex-col gap-10 p-10'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-inter font-medium text-4xl text-text-2'>Log in to Exclusive</h2>
                            <p className='font-inter font-normal text-base text-text-2'>Enter your details below</p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <TextField 
                            error={emailError}
                            onChange={(e)=> {
                                setEmail(e.target.value)
                                setEmailError(false)
                            }} 
                            value={email}
                            sx={{color: 'red'}} 
                            variant='standard' 
                            label='Email or Phone Number' />

                            <TextField 
                            error={passwordError}
                            onChange={(e)=> {
                                setPassword(e.target.value)
                                setPasswordError(false)
                            }} 
                            value={password}
                            sx={{color: 'black'}} 
                            variant='standard' 
                            label='Password' />

                            <ToastContainer />
                        </div>
                        <div className='flex justify-between items-center'>
                            <CommonButton onClick={handleLogin} text={'Log In'} />
                            <p className='font-poppins font-normal text-base text-secondary-2 cursor-pointer hover:underline'>Forget Password?</p>
                        </div>
                        <div className='text-center'>
                            <p className='font-poppins font-normal text-base text-text-2 cursor-pointer'>Create a new account? 
                            <Link to={'/signup'}>
                                <span className='hover:underline'>Sign Up</span>
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
