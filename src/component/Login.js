import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../actions/dashboardActions';

//Setting state for user's input
const Login = (props) => {
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
        props.getLogin(form, props);
    }

    return (
        //  Create Log in form here
        <div>

            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input 
                    type='text'
                    onChange= {handleChange}
                    value={inputData}
                    >
                    </input>
                </label>
                <label>Password:
                    <input
                    type='text'
                    onChange= {handleChange}
                    value={inputData}
                    >
                    </input>
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