import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Link } from "react-router-dom"
import { Navbar, Content,Wrapper } from "./style"
import LeftContent from '../../components/create/leftContent/LeftContent'
import MainContent from "../../components/create/mainContent/MainContent"
import RightContent from "../../components/create/rightContent/RightContent"
import Summary from '../../components/create/summary/Summary'
function Create() {
    const [toggleSetting, setToggleSetting] = useState(false)
    const [showSummary,setShowSummary]=useState(false)
    const [summary,setSummary]=useState({
        title:"",
        description:"",
        image:""
    })
    return (
        <>
            <Header>
                <Navbar>
                    <div class="input-group w-25" onClick={()=>setShowSummary(true)}>
                        <input type="text" class="form-control font-weight-bold" value={summary.title} placeholder="Enter kahoot title..." aria-label="Username" aria-describedby="basic-addon1" />
                        <div class="input-group-append">
                            <button className="btn btn-primary">Setting</button>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/me/discover" className="btn btn-outline-dark">Exit</Link>
                        <button className="btn btn-success">Done</button>
                    </div>
                </Navbar>
            </Header>
            <Content>
                <LeftContent></LeftContent>
                <Wrapper toggleSetting={toggleSetting}>
                    <MainContent toggleSetting={toggleSetting} setToggleSetting={setToggleSetting}></MainContent>
                    <RightContent toggleSetting={toggleSetting}></RightContent>
                </Wrapper>
            </Content>
            {showSummary&&<Summary setShowSummary={setShowSummary} setSummary={setSummary}></Summary>}
        </>
    )
}

export default Create
