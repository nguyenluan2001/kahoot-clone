import React from 'react'
import {Route,Redirect} from "react-router-dom"
import {useAuth} from "../context/AuthContext"
import {auth} from "../firebase"
function PrivateRoute({component:Component,...rest}) {
    const {currentUser}=useAuth()
    return (
        <Route
        {...rest}
        render={(props)=>{
            return auth.currentUser!=null?<Component props={props}></Component>:<Redirect to="/login"></Redirect>
        }}
        >

        </Route>
    )
}

export default PrivateRoute
