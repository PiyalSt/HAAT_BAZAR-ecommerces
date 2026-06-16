import React from 'react'

const CommonButton = ({text}) => {
  return (
    <>
        <div>
            <button className='bg-secondary-2 text-white font-poppins font-medium text-base px-8 py-3 rounded-sm cursor-pointer'>{text}</button>   
        </div>
    </>
  )
}

export default CommonButton
