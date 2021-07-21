import React from 'react'
import Header from '../../components/header/Header'
import { BrowserRouter as Router, Switch, Route, NavLink,Link } from "react-router-dom"
import Discover from '../discover/Discover'
import { LeftBar, RightBar, Navbar, UserInfo } from "./style"
import {
    FaGlobe,
    FaBars,
    FaUserAlt,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa"
import Library from '../libarary/Library'
import Detail from '../detail/Detail'
import { auth } from "../../firebase"
import ChangePassword from '../changePassword/ChangePassword'
import {useAuth} from "../../context/AuthContext"
import {useHistory} from "react-router-dom"
import PrivateRoute from '../../components/PrivateRoute'
function Me({ props }) {
    console.log(props)
    const history=useHistory()
    const {signOut}=useAuth()
    function handleCollapse(e) {
        e.target.classList.toggle("show")
    }
    function handleSignOut()
    {
        signOut().then(()=>{
            history.push("/login")
        })
    }
    return (
        <>
            <Header>
                <Navbar>
                    <LeftBar>
                        <NavLink to={`${props.match.url}/discover`} activeClassName="selected">
                            <FaGlobe></FaGlobe>
                            Discover
                        </NavLink>
                        <NavLink to={`${props.match.url}/library`} activeClassName="selected">
                            <FaBars></FaBars>
                            Library
                        </NavLink>
                    </LeftBar>
                    <RightBar>
                        <NavLink to={`${props.match.url}/creator`} className="create">Create</NavLink>
                        <UserInfo>
                            <a className="icon" data-toggle="collapse" href="#control-user" >
                                <FaUserAlt></FaUserAlt>
                            </a>
                            <div className="collapse" id="control-user">
                                <p className="user-name">{auth.currentUser?.displayName ? auth.currentUser?.displayName : auth.currentUser?.email}</p>
                                <div className="setting">
                                    <a data-toggle="collapse" href="#collapse-setting" onClick={(e) => handleCollapse(e)}>
                                        <div>
                                            <FaCog></FaCog>
                                            Settings
                                        </div>
                                        <div>
                                            <span className="icon-down">
                                                <FaChevronDown></FaChevronDown>
                                            </span>
                                            <span className="icon-up">
                                                <FaChevronUp></FaChevronUp>
                                            </span>
                                        </div>
                                    </a>
                                    <ul className="collapse collapse-setting" id="collapse-setting">
                                        <li>
                                            <Link to="/me/change-password">Profile settings</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="support">
                                    <a data-toggle="collapse" href="#collapse-support" onClick={(e) => handleCollapse(e)}>
                                        <div>
                                            <FaQuestionCircle></FaQuestionCircle>
                                            Support Center
                                        </div>
                                        <div>
                                            <span className="icon-down">
                                                <FaChevronDown></FaChevronDown>
                                            </span>
                                            <span className="icon-up">
                                                <FaChevronUp></FaChevronUp>
                                            </span>
                                        </div>
                                    </a>
                                    <ul className="collapse collapse-support" id="collapse-support">
                                        <li>Help</li>
                                        <li>Blog</li>
                                        <li>Library</li>
                                        <li>Certification</li>
                                        <li>Shop</li>
                                        <li>Suggest a feature</li>
                                    </ul>
                                </div>
                                <div className="sign-out" onClick={()=>handleSignOut()}>
                                    <FaSignOutAlt></FaSignOutAlt>
                                    Sign out
                                </div>

                            </div>
                        </UserInfo>
                    </RightBar>

                </Navbar>
            </Header>
            <Switch>
                <PrivateRoute path={`${props.match.path}/discover`} exact component={Discover}></PrivateRoute>
                <PrivateRoute path={`${props.match.path}/library`} component={Library}></PrivateRoute>
                <PrivateRoute path={`${props.match.path}/detail/:id`} component={Detail}></PrivateRoute>
                <PrivateRoute path={`${props.match.path}/change-password`} component={ChangePassword}></PrivateRoute>
            </Switch>
        </>
    )
}

export default Me
