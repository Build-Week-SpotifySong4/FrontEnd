import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getRegister } from '../actions/dashboardActions';
import {useForm} from 'react-hook-form'

const Register = (props) => {
    const [regInput, setRegInput] = useState({
    username: '',
    password: ''
    })

    const { register, errors, handleSubmit } = useForm()

const changeHandler = e => {
    setRegInput({
      ...regInput, 
      [e.target.name]: e.target.value
})}

const registration = e => {
        props.getRegister(regInput, props)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                
             <legend class='loginText'>Register Here</legend>
            
                <label class='userNameText'>Username:&emsp;
                    <input
                    type='text'
                    name="username"
                    ref = {register({required: true, minLength: 2})}
                    value={props.username}
                    onChange={changeHandler}
                    >                   
                    </input>
                    {errors.username && errors.username.type === 'required' && (<p class='error'>This is required</p>)}
                    {errors.username && errors.username.type === 'minLength' && (<p class='error'>Nope not nuff</p>)}
                </label>
                <label class='passwordText'>Password:&emsp;
                    <input
                    type='text'
                    name="password"
                    ref = {register({required: true, minLength: 2})}
                    value={props.password}
                    onChange={changeHandler}
                    >
                    </input>
                    {errors.password && errors.password.type === 'required' && (<p class='error'>This is required</p>)}
                    {errors.password && errors.password.type === 'minLength' && (<p class='error'>Nope not nuff</p>)}
                </label>
                
                <div>
                <button class='logButton'>Submit</button>
                </div>
            </form>
        </div>
    )

}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getRegister})(Register);
