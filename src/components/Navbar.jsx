import React from 'react'
import { NavLink } from 'react-router'
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <>
        <div>
            <div className='bg-black'>
                <div className='max-w-7xl mx-auto px-4 relative'>
                    <div className='flex justify-center items-center py-3'>
                        <div className='flex items-center gap-2'>
                            <p className='font-poppins font-normal text-sm text-text'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <NavLink to={'/'}>
                                <li className='list-none font-poppins font-semibold text-sm text-text  hover:underline'>ShopNow</li>
                            </NavLink>
                        </div>
                        <div className='absolute right-5'>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <p className='font-poppins font-normal text-sm text-text'>English</p>
                                <FaAngleDown className='font-bold text-base text-text'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-b border-gray-400'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex justify-between items-center pt-10 pb-4'>
                        <div>
                            <NavLink to={'/'}>
                                <h2 className='font-inter font-bold text-2xl text-text-2'>Exclusive</h2>
                            </NavLink>
                        </div>

                        <div className='flex items-center gap-12 '>
                            <NavLink>
                                <li className='list-none font-poppins font-normal text-base text-text-2  hover:underline'>Home</li>
                            </NavLink>
                            <NavLink>
                                <li className='list-none font-poppins font-normal text-base text-text-2  hover:underline'>Contact</li>
                            </NavLink>
                            <NavLink>
                                <li className='list-none font-poppins font-normal text-base text-text-2  hover:underline'>About</li>
                            </NavLink>
                            <NavLink>
                                <li className='list-none font-poppins font-normal text-base text-text-2  hover:underline'>Sign Up</li>
                            </NavLink>
                        </div>

                        <div className='flex items-center gap-6'>
                            <div className='flex items-center justify-between w-60 bg-secondary py-2 pl-5 pr-3 rounded-sm'>
                                <input className='w-full outline-none font-poppins font-normal text-xs text-text-2' type="text" placeholder='What are you looking for ?' />
                                <IconButton size='small'>
                                    <FiSearch />
                                </IconButton>
                            </div>
                            <div className='flex items-center gap-4'>
                                <IconButton>
                                    <GoHeart className='text-2xl cursor-pointer' />
                                </IconButton>
                                <IconButton>
                                    <MdOutlineShoppingCart className='text-2xl cursor-pointer' />
                                </IconButton>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
