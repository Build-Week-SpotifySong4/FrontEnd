import React, { useEffect } from 'react'
import axios from 'axios'

function Register () {
    const [regInput, setRegInput] = useState({
    regUserName: '',
    regPassword: ''
    })

    useEffect(() => {
        axios.get('https://damp-hamlet-68165.herokuapp.com/api/auth/register')
        .then((response) => {
            setRegInput((response.data))
        }).catch((error) => {error})
    }, []) 

const changeHandler = e => {
    setRegInput(e.target.value)
}

    return (
        <div>
            <form onSubmit={}>
                <label>Username:
                    <input
                    type='text'
                    value={regInput}
                    onChange={changeHandler}
                    >                   
                    </input>
                </label>
                <label>Password:
                    <input
                    type='text'
                    value={regInput}
                    onChange={changeHandler}
                    >
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}
export default Register