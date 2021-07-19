import React, { useState } from 'react'
import { QuizItemContainer } from "./style"
import {
    FaRegStar,
    FaEllipsisV,
    FaUserAlt,
    FaTrashAlt,
    FaRegClone,
    FaPen,
    FaExchangeAlt,
    FaICursor
} from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"
import { firestore } from "../../../firebase"
import Modal from '../modal/Modal'
import ModalDelete from '../modalDelete/ModalDelete'
import ModalRename from '../modalRename/ModalRename'
function QuizItem({ quiz, setQuizs,setShowPlayModal,setQuizPlay }) {
    const history = useHistory()
    const [showControlAction, setShowControlAction] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalRename,setShowModalRename]=useState(false)
    function handleDelete() {
     
        setShowModalDelete(true)
        setShowControlAction(false)
    }
    function handleDetailQuiz(e) {

        history.push(`/me/detail/${quiz.id}`)
        console.log(e.target)
    }
    function handleRename()
    {
        setShowModalRename(true)
        setShowControlAction(false)

    }
    function handlePlay()
    {
        setShowPlayModal(true)
        setQuizPlay(quiz)
    }
    return (
        <>
            <QuizItemContainer name="detail">
                <div className="wrap-img">
                    <input type="checkbox" />
                    <div className="img">
                        <img src={quiz.data().coverImg} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="top-content">
                        <div className="title" onClick={(e) => handleDetailQuiz(e)}>{quiz.data().title}</div>
                        <div className="action">
                            <div className="start">
                                <FaRegStar className="star"></FaRegStar>
                            </div>
                            <div className="control">
                                <FaEllipsisV onClick={() => setShowControlAction(pre => !pre)}></FaEllipsisV>
                                {showControlAction &&
                                    <ul className="control-action">
                                        <li>
                                            <FaPen></FaPen>
                                            Edit
                                        </li>
                                        <li onClick={()=>handleRename()}>
                                            <FaICursor></FaICursor>
                                            Rename
                                        </li>
                                        <li>
                                            <FaRegClone></FaRegClone>
                                            Duplicate
                                        </li>
                                        <li>
                                            <FaExchangeAlt></FaExchangeAlt>
                                            Move
                                        </li>
                                        <li onClick={() => handleDelete()}>
                                            <FaTrashAlt></FaTrashAlt>
                                            Delete
                                        </li>
                                    </ul>}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="author">
                            <div className="icon">
                                <FaUserAlt></FaUserAlt>
                            </div>
                            <div className="author-name">
                                luannguyen
                            </div>
                        </div>
                        <div className="action">
                            <Link className="btn btn-primary" to={`/me/edit/${quiz.id}`}>Edit</Link>
                            <button className="btn btn-success" onClick={()=>handlePlay()}>Play</button>
                        </div>
                    </div>
                </div>
            </QuizItemContainer>
            {showModalDelete && <ModalDelete quiz={quiz} setQuizs={setQuizs} setShowModalDelete={setShowModalDelete}>sdfsdf</ModalDelete>}
             {showModalRename&&<ModalRename quiz={quiz} setQuizs={setQuizs} setShowModalRename={setShowModalRename}></ModalRename>}                       
        </>
    )
}

export default QuizItem
