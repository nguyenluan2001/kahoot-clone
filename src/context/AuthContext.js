import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth } from "../firebase"
import { withRouter } from "react-router"
import { firestore,firebase } from "../firebase"
import { FaHips } from "react-icons/fa"
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
    const signOut=()=>{
        return auth.signOut()
    }
    const changePass=(pass)=>{
        return auth.currentUser.updatePassword(pass)
    }
    const googleLogin=()=>{
        return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(()=>{
            history.push("/me/discover")
        })
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            // if(currentUser)
            // {
            //     // history.push("/discover")
            //     console.log(auth.currentUser)
            // }
            if (currentUser) {
                history.push('/me/discover')
            }
          
        })
    }, [currentUser, history])
    const value = { currentUser,signUp,login,changePass,signOut,googleLogin }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default withRouter(AuthProvider)