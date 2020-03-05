import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogin } from '../actions/dashboardActions';
import {useForm} from 'react-hook-form'
import {Button} from 'reactstrap'

//Setting state for user's input
const Login = props => {
    const [inputData , setInputData] = useState({
        username: '',
        password: ''
    })

    const { register, errors, handleSubmit } = useForm()

const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    }


 const login = e => {
        props.getLogin(inputData, props);
    }

    return (
        //  Create Log in form here

        <div>

            <form onSubmit={handleSubmit(login)}>
                
                <legend class='loginText'>Login Here</legend>
                <label class='userNameText'>Username:&emsp;
                    <input 
                    type='text'
                    name = 'username'
                    ref = {register({required: true, minLength: 3})}
                    type='text'
                    onChange= {handleChange}
                    value={props.username}
                    >
                    </input>
                
                    {errors.username && errors.username.type === 'required' && (<p class='error'>This is required</p>)}
                    {errors.username && errors.username.type === 'minLength' && (<p class='error'>nope not nuff</p>)}
                    
                </label>
                <label class='passwordText'>Password:&emsp;
                    <input
                    type='text'
                    name = 'password'
                    ref = {register({required: true, minLength: 3})}
                    onChange= {handleChange}
                    value={props.password}
                    >
                    </input>
                
                    {errors.password && errors.password.type === 'required' && (<p class='error'>This is required</p>)}
                    {errors.password && errors.password.type === 'minLength' && (<p class='error'>nope not nuff</p>)}
                
                </label>

                
                <div>
                 <button class='logButton'>Login</button>                
                <Link to="/register">Register</Link>
              </div>
            </form>
            
        </div>
    )
}


const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { getLogin })(Login);

// {{color: 'white'}}