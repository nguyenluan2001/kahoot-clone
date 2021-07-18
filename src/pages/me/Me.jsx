import React from 'react'
import Header from '../../components/header/Header'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import Discover from '../discover/Discover'
import { LeftBar, RightBar, Navbar, UserInfo } from "./style"
import { FaGlobe, FaBars, FaUserAlt } from "react-icons/fa"
import Library from '../libarary/Library'
import Detail from '../detail/Detail'
function Me({ props }) {
    console.log(props)
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
                            <div className="icon">
                                <FaUserAlt></FaUserAlt>
                            </div>
                            <div className="dropdown"></div>
                        </UserInfo>
                    </RightBar>

                </Navbar>
            </Header>
            <Switch>
                <Route path={`${props.match.path}/discover`} exact component={Discover}></Route>
                <Route path={`${props.match.path}/library`} component={Library}></Route>
                <Route path={`${props.match.path}/detail/:id`} component={Detail}></Route>
            </Switch>
        </>
    )
}

export default Me
