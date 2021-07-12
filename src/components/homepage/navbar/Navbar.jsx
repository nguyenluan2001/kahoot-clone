import React from 'react'
import {NavbarContainer,RightNav} from "./style"
import {Link} from "react-router-dom"
import Header from '../../header/Header'
function Navbar() {
    return (
    
        <Header>
            <RightNav>
               <Link className="contact">Contact sales</Link>
               <Link className="explore" to="#">
                   <span>Explore content</span>
               </Link>
               <Link className="play" to="#">Play</Link>
               <Link className="sign-up" to="/sign-up">Sign up</Link>
               <Link className="login" to="/login">Log in</Link>
           </RightNav>
        </Header>
    )
}

export default Navbar
