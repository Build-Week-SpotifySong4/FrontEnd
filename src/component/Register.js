import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getRegister } from '../actions/dashboardActions';

const Register = props => {
    const [regInput, setRegInput] = useState({
    username: '',
    password: ''
    })

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
        <div className="form">
            <form onSubmit={handleSubmit}>
             <legend>Register Here</legend>
                <label>Username:
                    <input
                    type='text'
                    name="username"
                    value={props.username}
                    onChange={changeHandler}
                    >                   
                    </input>
                </label>
                <label>Password:
                    <input
                    type='text'
                    name="password"
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
