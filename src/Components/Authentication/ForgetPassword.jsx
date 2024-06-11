import React from 'react'
import Input from './Input.tsx'
import Button from './Button.tsx'

const ForgetPassword = () => {
    return (
        <section className='py-36 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80'>
            <div className="container mx-auto">
                <div className='text-[#474B57] text-sm leading-[24.5px] mb-6'>
                    Please enter the email address associated with your account. We'll promptly send you a link to reset your password.
                </div>
                <Input type="email" label="Email" />
                <Button>Send reset link</Button>
            </div>
        </section>
    )
}

export default ForgetPassword