import React, { useEffect } from 'react'

function Search () {

    const [songData, setSongData] = useState([])
    const [query, setQuery] = useState('')

useEffect(() => {
    axios.get('https://damp-hamlet-68165.herokuapp.com/api/songs')
    .then((response) => {
        setSongData((response.data))
    }).catch((error) => {console.log(error)})
},[])

const changeHandler = e => {
    setQuery(e.target.value)
}

const changeHandler = e => {
    setSongData(e.target.value)
}

return (
    <div>
        <form onSubmit={}>
            <label>Start Rockin:
                <input
                type='text'
                value={songData}
                onSubmit={changeHandler}
                >
                </input>
            </label>
        </form>
    </div>
)


}

export default Search