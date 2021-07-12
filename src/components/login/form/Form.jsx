import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import {useAuth} from "../../../context/AuthContext"
function Form() {
    const [input,setInput]=useState(null)
    const {login}=useAuth()
    const history=useHistory()
    function handleInput(e)
    {
        setInput(state=>{
            return {...state,[e.target.name]:e.target.value}
        })
    }
    async function handleSubmit(e)
    {
        e.preventDefault()
        await login(input)
        history.push('/me/discover')
    }
    return (
        <form className="w-50" onSubmit={(e)=>handleSubmit(e)}>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor=""> Email</label>
                <input type="text" name="email" className="form-control" onChange={(e)=>handleInput(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name="password" className="form-control" onChange={(e)=>handleInput(e)} />
            </div>
            <button className="btn btn-success">Login</button>
            <Link className="btn btn-danger" to="/sign-up">Sign up</Link>
        </form>
    )
}

export default Form
