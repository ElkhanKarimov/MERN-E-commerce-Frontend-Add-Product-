import React from 'react'

const Input = ({ label, type }) => {
    return (
        <div className='pb-6'>
            <label
                className='text-[#474B57] text-sm leading-[24.5px] font-medium block'
                htmlFor="">
                {label}
            </label>
            <input
                className='border py-[10px] px-[15px] rounded-md w-80'
                type={type} />
        </div>
    )
}

export default Input