import React, { useState } from 'react'
import { AnswerItemContainer } from "./style"
import { useSelector,useDispatch } from "react-redux"
import {updateResult} from "../../../slice/challengeSlice"
function AnswerItem({
     answer, color, type, 
     order,isClickAnswer,
     setIsClickAnswer,setShowResult }) {
    const currentQuestion = useSelector(state => state.challenge).currentQuestion
    const dispatch=useDispatch()
    function handleChooseAnswer() {
        setIsClickAnswer(true)
        if(order==currentQuestion.correct)
        {
            setShowResult(true)
            let question={...currentQuestion,status:true}
            dispatch(updateResult(question))
        }
        else
        {
            setShowResult(false)
            let question={...currentQuestion,status:false}
            dispatch(updateResult(question))
        }
      
    }
    return (
        <AnswerItemContainer className={isClickAnswer?currentQuestion.correct==order?'true':'false':""} type={type} color={color} onClick={() => handleChooseAnswer()}>
            <div className={`icon-${type}`}>

            </div>
            <span className="answer">
                {answer.answer}
            </span>
        </AnswerItemContainer>
    )
}

export default AnswerItem
