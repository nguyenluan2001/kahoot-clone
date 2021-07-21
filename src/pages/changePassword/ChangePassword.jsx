import React, { useRef, useState, useEffect } from 'react'
import { auth } from "../../firebase"
import { useAuth } from "../../context/AuthContext"
import { useHistory } from "react-router-dom"
function ChangePassword() {
    const oldPassRef = useRef()
    const newPassRef = useRef()
    const repeatNewPassRef = useRef()
    const [input, setInput] = useState({
        oldPass: "",
        newPass: "",
        repeatNewPass: ""
    })
    const [validate, setValidate] = useState(false)
    const [errors, setErrors] = useState({
        oldPassError: "",
        newPassError: "",
        repeatNewPassError: ""
    })
    const style = {
        height: "100vh"
    }
    const { changePass } = useAuth()
    const history = useHistory()
    useEffect(() => {
        if (input.oldPass != "" && input.newPass != "" && input.repeatNewPass != "" && input.newPass === input.repeatNewPass) {

            setValidate(true)
          
        }
        else {
            setValidate(false)

        }
        for (let prop in input) {
            if (input[prop].length < 6 && input[prop].length > 0) {
                setErrors(pre => {
                    return { ...pre, [`${prop}Error`]: "Your password needs to be at least 6 characters." }
                })
                setValidate(false)
            }
            else {
                setErrors(pre => {
                    return { ...pre, [`${prop}Error`]: "" }
                })
            }
        }
    }, [input])
    function showPass(type) {
        switch (type) {
            case "oldPass":
                {
                    if (oldPassRef.current.type == "password") {
                        oldPassRef.current.type = "text"
                        oldPassRef.current.nextSibling.innerText = "hide"

                    }
                    else {
                        oldPassRef.current.type = "password"
                        oldPassRef.current.nextSibling.innerText = "show"


                    }
                    break
                }
            case "newPass":
                {
                    if (newPassRef.current.type == "password") {
                        newPassRef.current.type = "text"
                        newPassRef.current.nextSibling.innerText = "hide"


                    }
                    else {
                        newPassRef.current.type = "password"
                        newPassRef.current.nextSibling.innerText = "show"


                    }
                    break
                }
            case "repeatNewPass":
                {
                    if (repeatNewPassRef.current.type == "password") {
                        repeatNewPassRef.current.type = "text"
                        repeatNewPassRef.current.nextSibling.innerText = "hide"


                    }
                    else {
                        repeatNewPassRef.current.type = "password"
                        repeatNewPassRef.current.nextSibling.innerText = "show"


                    }
                    break
                }
        }

    }
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    function handleSubmit() {
        changePass(input.newPass).then(() => {
            history.push("/login")
        }).catch(err=>{
            console.log("error",err)
        })
    }
    return (
        <div className="px-5 bg-light" style={style}>
            <h3>Settings</h3>
            <form action="" class="w-50 bg-white p-3">
                <div className="form-group">
                    <label htmlFor="">Old password</label>
                    <input type="password" name="oldPass" className="form-control" ref={oldPassRef} onChange={(e) => handleInput(e)} />
                    <span onClick={() => showPass("oldPass")}>show</span>
                    <p className="text-danger">{errors.oldPassError}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">New password</label>
                    <input type="password" ref={newPassRef} className="form-control" name="newPass" onChange={(e) => handleInput(e)} />
                    <span onClick={() => showPass("newPass")}>show</span>
                    <p className="text-danger">{errors.newPassError}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Repeat new password</label>
                    <input type="password" ref={repeatNewPassRef} className="form-control" name="repeatNewPass" onChange={(e) => handleInput(e)} />
                    <span onClick={() => showPass("repeatNewPass")}>show</span>
                    <p className="text-danger">{errors.repeatNewPassError}</p>

                </div>

            </form>
            {
                validate ? <button className="btn btn-success" onClick={() => handleSubmit()}>Save</button> : <button className="btn btn-dark" disabled>Save</button>
            }
        </div>
    )
}

export default ChangePassword
