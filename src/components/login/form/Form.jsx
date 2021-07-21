import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { FaGooglePlusG } from "react-icons/fa"
function Form() {
    const [input, setInput] = useState(null)
    const { login,googleLogin } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")

    function handleInput(e) {
        setInput(state => {
            return { ...state, [e.target.name]: e.target.value }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        login(input)
            .then(() => {
                history.push('/me/discover')

            })
            .catch(err => {
                setError(err.message)
            })
    }
    function handleGoogleLogin()
    {
        googleLogin()
    }
    return (
        <form className="w-25 bg-white p-2" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor=""> Email</label>
                <input type="text" name="email" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name="password" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <p className="text-danger">{error}</p>
            <div className="buttons text-center">

                <button className="btn btn-success btn-block">Login</button>
                <hr />
                {/* <Link className="btn btn-danger" to="/sign-up">Sign up</Link> */}
                <div className="google-login btn btn-light btn-block" onClick={()=>handleGoogleLogin()}>
                    <FaGooglePlusG className="text-danger" style={{ fontSize: "2rem" }}></FaGooglePlusG>
                    <span className="ml-2 font-weight-bold">Google</span>
                </div>
                <p>Don't have accound? <Link to="/sign-up">Sign up</Link></p>
            </div>
        </form>
    )
}

export default Form
