import React from 'react'
import { VscSend } from 'react-icons/vsc'
import payImage from '../assets/pay-img.png'
import { ImFacebook, ImTwitter } from 'react-icons/im'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Button } from '@mui/material'

const Footer = () => {
  return (
    <>
        <section className='bg-button'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center py-20'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-inter font-bold text-2xl text-secondary mb-2'>Exclusive</h3>
                        <h4 className='font-poppins font-medium text-xl text-secondary'>Subscribe</h4>
                        <p className='font-poppins font-normal text-base text-secondary'>Get 10% off your first order</p>
                        <div className='w-55 flex items-center justify-between text-secondary border-2 py-2 px-4 rounded-sm mt-4'>
                            <input className='w-full font-poppins font-normal text-base text-secondary outline-none' type="text" placeholder='Enter your email' />
                            <VscSend className='text-xl' />
                        </div>
                    </div>
                    <div className='w-full flex justify-evenly mx-4'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-poppins font-medium text-xl text-text mb-2'>Support</h4>
                            <p className='w-43.75 font-poppins font-normal text-base text-text'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p className='font-poppins font-normal text-base text-text'>exclusive@gmail.com</p>
                            <p className='font-poppins font-normal text-base text-text'>+88015-88888-9999</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-poppins font-medium text-xl text-text mb-2'>Account</h4>
                            <p className='w-43.75 font-poppins font-normal text-base text-text'>My Account</p>
                            <p className='font-poppins font-normal text-base text-text'>Login / Register</p>
                            <p className='font-poppins font-normal text-base text-text'>Cart</p>
                            <p className='font-poppins font-normal text-base text-text'>Wishlist</p>
                            <p className='font-poppins font-normal text-base text-text'>Shop</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-poppins font-medium text-xl text-text mb-2'>Quick Link</h4>
                            <p className=' font-poppins font-normal text-base text-text'>Privacy Policy</p>
                            <p className='font-poppins font-normal text-base text-text'>Terms Of Use</p>
                            <p className='font-poppins font-normal text-base text-text'>FAQ</p>
                            <p className='font-poppins font-normal text-base text-text'>Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-poppins font-medium text-xl text-text mb-2'>Download App</h4>
                        <p className='font-poppins font-medium text-sm text-text'>Save $3 with App New User Only</p>
                        <div>
                            <img className='w-full' src={payImage} alt="" />
                        </div>
                        <div className='flex gap-1 mt-4 list-none'>
                            <Button sx={{color: 'gray'}}>
                                <li><ImFacebook className='text-2xl text-text cursor-pointer' /></li>
                            </Button>
                            <Button sx={{color: 'gray'}}>
                                <li><ImTwitter className='text-2xl text-text cursor-pointer' /></li>
                            </Button>
                            <Button sx={{color: 'gray'}}>
                                <li><FaInstagram className='text-2xl text-text cursor-pointer' /></li>
                            </Button>
                            <Button sx={{color: 'gray'}}>
                                <li><FaLinkedin className='text-2xl text-text cursor-pointer' /></li>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='text-center border-t border-gray-400'>
                    <p className='font-poppins font-normal text-base text-text pt-4 pb-6'>&copy; Copyright Rimel 2022. All right reserved</p>
                </div>
        </section>
    </>
  )
}

export default Footer
