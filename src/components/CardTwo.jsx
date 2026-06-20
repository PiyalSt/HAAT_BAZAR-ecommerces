import React from 'react'

const CardTwo = ({ cateIcon, categories }) => {
  return (
    <>
        <div className='w-42.5 h-36.25 flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 cursor-pointer hover:bg-secondary-2 transition duration-300 group'>
            <div className='duration-100'>
                {cateIcon}
            </div>
            <p className='font-poppins font-normal text-base text-black group-hover:text-text duration-100 transition-all ease-in'>{categories}</p>
        </div> 
    </>
  )
}

export default CardTwo
