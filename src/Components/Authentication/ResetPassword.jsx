import React from 'react'
import Input from './Input.tsx'
import Button from './Button.tsx'

const ResetPassword = () => {
    return (
        <section className='py-32 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80'>
            <div className="container mx-auto">
                <Input type="password" label="New password" />
                <Input type="password" label="Confirm password" />
                <Button>Reset password</Button>
            </div>
        </section>
    )
}

export default ResetPassword