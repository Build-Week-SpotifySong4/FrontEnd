import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getLogin } from '../actions/dashboardActions';

const Login = (props) => {
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
        props.getLogin(form);
    }

    return (
        //  Create Log in form here
        <div>

        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { getLogin })(Login);