import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogin } from '../actions/dashboardActions';

//Setting state for user's input
const Login = props => {
    const [inputData , setInputData] = useState({
        username: '',
        password: ''
    })

const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    }

 const handleSubmit = e => {
        e.preventDefault();
        props.getLogin(inputData, props);
    }

    return (
        //  Create Log in form here
        <div className="form">
            <form onSubmit={handleSubmit}>
                <legend>User Login</legend>
                <label>Username:
                    <input 
                    type='text'
                    name="username"
                    onChange={handleChange}
                    value={props.username}
                    >
                    </input>
                </label>
                <label>Password:
                    <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                    value={props.password}
                    >
                    </input>
                </label>
                <button>Login</button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { getLogin })(Login);