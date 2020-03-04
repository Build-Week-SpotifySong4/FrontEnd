import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../actions/dashboardActions';
import {useForm} from 'react-hook-form'

//Setting state for user's input
const Login = (props) => {
    const [inputData , setInputData] = useState({
        username: '',
        password: ''
    })

    const { register, errors, handleSubmit } = useForm()

const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target
    })
    }

 const login = e => {
        e.preventDefault();
        props.getLogin(inputData, props);
    }
//jkldkjfjefkajdfk
    return (
        //  Create Log in form here
        <div>

            <form onSubmit={handleSubmit(login)}>
                <label >Username:
                    <input 
                    name = 'username'
                    ref = {register({required: true, minLength: 3})}
                    type='text'
                    onChange= {handleChange}
                    value={props.username}
                    >
                    </input>
                    {errors.username && <p style={{color: 'white'}}>This is required</p>}
                </label>
                <label>Password:
                    <input
                    name = 'password'
                    ref = {register({required: true, minLength: 3})}
                    type='text'
                    onChange= {handleChange}
                    value={props.password}
                    >
                    </input>
                    {errors.username && <p>This is required</p>}
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { getLogin })(Login);