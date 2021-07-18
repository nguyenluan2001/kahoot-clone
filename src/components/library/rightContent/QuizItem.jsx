import React from 'react'
import {QuizItemContainer} from "./style"
import { FaRegStar, FaEllipsisV, FaUserAlt } from "react-icons/fa"

function QuizItem({quiz}) {
    return (
        <QuizItemContainer to={`/me/detail/${quiz.id}`}>
        <div className="wrap-img">
            <input type="checkbox" />
            <div className="img">
                <img src={quiz.data().coverImg} alt="" />

            </div>
        </div>
        <div className="content">
            <div className="top-content">
                <div className="title">{quiz.data().title}</div>
                <div className="action">
                    <div className="start">
                        <FaRegStar className="star"></FaRegStar>
                    </div>
                    <div className="control">
                        <FaEllipsisV className="control"></FaEllipsisV>

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
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-success">Play</button>
                </div>
            </div>
        </div>
    </QuizItemContainer>
    )
}

export default QuizItem
