import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from "./style"
function ModalPlay({ setShowPlayModal,quizPlay }) {
    return (
        <Container>
            <Content>
                <h3>Choose the way to play this kahoot</h3>
                <div className="ways">
                    <div className="host way">
                        <img src="https://assets-cdn.kahoot.it/builder/v2/assets/Live Social Students.89f4297a.png" alt="" />
                        <div className="wrap-btn">
                            <button className="btn btn-success" >Host</button>
                        </div>
                    </div>
                    <div className="challenge way">
                        <img src="https://assets-cdn.kahoot.it/builder/v2/assets/Challenge%20Social%20Students.e90b7f42.png" alt="" />
                        <div className="wrap-btn">
                            <button className="btn btn-success">Challenge</button>
                        </div>

                    </div>
                </div>
                <div className="practice">
                    <span>Start a single-player gamse with virtual players</span>
                    <Link className="btn btn-outline-info" to={`/challenge/${quizPlay.id}`}>Practice</Link>
                </div>
                <button className=" close-btn" onClick={() => setShowPlayModal(false)}>Close</button>
            </Content>

        </Container>
    )
}

export default ModalPlay
