import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getRegister } from '../actions/dashboardActions';
import { useForm } from 'react-hook-form'

const Register = (props) => {
    const [regInput, setRegInput] = useState({
    username: '',
    password: ''
    })

    const { register } = useForm()

const changeHandler = e => {
    setRegInput({
      ...regInput, 
      [e.target.name]: e.target.value

    })}


const handleSubmit = e => {
        e.preventDefault();
        props.getRegister(regInput, props)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
             <legend>Register Here</legend>
                <label>Username:
                    <input
                    type='text'
                    name="username"
                    ref = {register({register: true})}
                    value={props.username}
                    onChange={changeHandler}
                    >                   
                    </input>
                </label>
                <label>Password:
                    <input
                    type='text'
                    name="password"
                    ref = {register({register: true})}
                    value={props.password}
                    onChange={changeHandler}
                    >
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getRegister})(Register);
