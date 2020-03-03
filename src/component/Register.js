import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRegister } from '../actions/dashboardActions';

const Register = (props) => {
    const [ form, setForm ] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.getRegister(form, props)
    }

    return (
        // Create registration form here
        <div>
        <form onSubmit={handleSubmit}>
        <legend>Register Here</legend>
        <label>Enter username: 
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={handleChanges}
        />
        </label>
        <label>Enter password:
        <input
          type='password'
          name="password"
          value={props.password}
          onChange={handleChanges}
        />
        </label>
        <button>Log in</button>
      </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})



export default connect(mapStateToProps, {getRegister})(Register);