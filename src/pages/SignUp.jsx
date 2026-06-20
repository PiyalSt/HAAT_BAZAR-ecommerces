import React, { useState } from 'react'
import assets from '../assets/assets'
import { TextField } from '@mui/material'
import CommonButton from '../components/CommonButton'
import { FcGoogle } from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router'

const SignUp = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handleSignup = () => {
        if(!name) {
            toast.error('Please enter your name')
            setNameError(true)
            return
        }
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
        toast.success('Create your account Successfully')
    }

  return (
    <>
        <section id='SignUpPage'>
            <div className='max-w-7xl mx-auto mt-15 mb-35 flex justify-between items-center gap-10'>
                <div className='w-6/12 '>
                    <img className='w-200' src={assets.loginImg} alt="Login Images" />
                </div>
                <div className='w-6/12 '>
                    <div className='flex flex-col gap-10 p-10'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-inter font-medium text-4xl text-text-2'>Create an account</h2>
                            <p className='font-inter font-normal text-base text-text-2'>Enter your details below</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <TextField 
                            error={nameError}
                            onChange={(e)=> {
                                setName(e.target.value)
                                setNameError(false)
                            }}
                            value={name}
                            sx={{color: 'red'}} 
                            variant='standard' 
                            label='Name' />

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
                        <div className='flex flex-col gap-4 items-center'>
                            
                            <button 
                            onClick={handleSignup}
                            className='w-full py-3 flex justify-center items-center gap-4 bg-secondary-2 text-white font-inter cursor-pointer rounded-sm'>
                                Login
                            </button>
                            <button className='w-full py-3 flex justify-center items-center gap-4 border-2 border-slate-300 rounded-sm cursor-pointer'>
                                <FcGoogle />
                                <p>Sign up with Google</p>
                            </button>
                            <p className='font-poppins font-normal text-base text-text-2 cursor-pointer'>Already have account? 
                            <Link to={'/login'}>
                                <span className='hover:underline'>Log in</span>
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

export default SignUp
