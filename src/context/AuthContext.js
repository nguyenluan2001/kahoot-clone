import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth } from "../firebase"
import { withRouter } from "react-router"
import { firestore } from "../firebase"
const AuthContext = React.createContext()
export const useAuth = () => {
    return useContext(AuthContext)

}
const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null)
    const signUp=(user)=>
    {
        return auth.createUserWithEmailAndPassword(user.email,user.password).then((created)=>{
            firestore.collection('users').doc(created.user.uid).set({
                username:user.username
            }).then(()=>{

                history.push('/login')
            })
        })
    }
    const login=(user)=>{
        return auth.signInWithEmailAndPassword(user.email,user.password)
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            if(currentUser)
            {
                // history.push("/discover")
                console.log(currentUser)
            }
          
        })
    }, [currentUser, history])
    const value = { currentUser,signUp,login }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default withRouter(AuthProvider)