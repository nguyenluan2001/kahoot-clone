import React, { useState } from 'react'
import {useAuth} from "../../../context/AuthContext"
function Form() {
    const [input, setInput] = useState()
    const {signUp}=useAuth()
    function handleInput(e) {
        setInput(state => {
            return { ...state, [e.target.name]: e.target.value }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        signUp(input)
        console.log(input)
    }
    return (
        <form className="w-50" onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" name="username" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" name="email" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name="password" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
    )
}

export default Form
