import React from 'react'

const Title = ({titleOne, titleTwo}) => {
  return (
    <>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
                <div className='w-5 h-10 bg-secondary-2 rounded-sm'></div>
                <p className='font-poppins font-semibold text-base text-secondary-2'>{titleOne}</p>
            </div>
            <div>
                <h2 className='font-inter font-semibold text-4xl'>{titleTwo}</h2>
            </div>
        </div>
    </>
  )
}

export default Title
