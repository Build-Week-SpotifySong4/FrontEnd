import React, { useState } from 'react';

const Register = () => {
    const [ register, setRegister ] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setRegister({
            ...register,
            [e.target.value]: e.target.value
        })
    }

    const 

    return (
        // Create registration form here
        <div>
            
        </div>
    )
}