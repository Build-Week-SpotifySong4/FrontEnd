
import React, { useEffect } from 'react'
import axios from 'axios'

//Setting state for user's input
const Login = (props) => {
    const [inputData , setInputData] = useState({
        username: '',
        password: ''
    })


    useEffect(() => {
        axios.get('https:damp-hamlet-68165.herokuapp.com/api/auth/login')
        .then((response) => {
            setInputData(response.data)
        }).catch((error) => {console.log(error)})
    }, []
    )

const handleChange = e => {
    setInputData(e.target.value)
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

export default Login;