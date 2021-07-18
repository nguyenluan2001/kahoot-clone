import React,{useState} from 'react'
import { AnswerItemContainer } from "./style"
import {FaCheck,FaTimes} from "react-icons/fa"
function AnswerItem({ answer, type, color,correct,order }) {

    return (
        <AnswerItemContainer color={color} >
            <div className="icon" >
                <div className={`icon-${type}`}></div>
            </div>
            <div className="answer">
                <span>{answer.answer}</span>
                {order==correct?<span className="text-success"><FaCheck></FaCheck></span>:<span className="text-danger"><FaTimes></FaTimes></span>}
            </div>
        </AnswerItemContainer>
    )
}

export default AnswerItem
