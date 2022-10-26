import React, {useState, useEffect} from 'react';

const Login = ({setToken, setUser, setCurrentId}) => {
    const [users, setUsers] = useState([])
    const [formData, setForm] = useState("")                                                                                                                                    

    useEffect(() => {
        fetch(`http://localhost:9292/api/users`)
        .then(res => res.json())
        .then(data => {
          setUsers(data)
        })
        .catch(console.error)
      }, [])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const usersLowerCase = users.map(element => element.username.toLowerCase())
        // console.log(users.find(element => element.username.toLowerCase() === formData.toLowerCase()))
        // console.log(usersLowerCase.includes(formData.toLowerCase())) //returns true or false
        if (usersLowerCase.includes(formData.toLowerCase())) {
            setCurrentId(users.find(element => element.username.toLowerCase() === formData.toLowerCase()).id)
            setUser(formData)
        } 
        else {
            fetch(`http://localhost:9292/api/users/${formData}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username: formData})
            })
            .then((res) => res.json())
            .then(data => {
                setCurrentId(data.id)
                setUser(formData)
            })
            .catch(err => console.error(err))

            // setCurrentId(users.find(element => element.username.toLowerCase() === formData.toLowerCase()).id)
            // setUser(formData)
        }
        setToken(true);
    }

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    return (
        <div className='login-page'>
            <h1>Login to View Brews</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" value={formData} onChange={handleChange}/>
                </label>
                {/* <label>
                    <p>Password</p>
                    <input type="password" />
                </label> */}
                <div>
                    <button className='submit-btn' type="submit">Log In</button>
                </div>
            </form>
        </div>

    )
}

export default Login