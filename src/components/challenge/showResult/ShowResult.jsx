import React from 'react'
import {Container} from "./style"
import {useSelector,useDispatch} from "react-redux"
import {Link,useHistory} from "react-router-dom"
import {resetState} from "../../../slice/challengeSlice"
function ShowResult() {
    const challenge=useSelector(state=>state.challenge)
    let trueAnswers=0
    let wrongAnswers=0
    challenge.result.forEach(item=>{
        if(item.status)
        {
            trueAnswers++
        }
        else
        {
            wrongAnswers++
        }
    })
    const history=useHistory()
    const dispatch=useDispatch()
    function handleBackLibrary()
    {
        dispatch(resetState())
        history.push("/me/library")
    }
    return (
        <Container>
            <div className="quiz">
                {challenge.quiz.title}
            </div>
            <div className="result">
                <p>Total question: {challenge.quiz.listQuizs.length}</p>
                <p>True answers: {trueAnswers}</p>
                <p>Wrong answers: {wrongAnswers}</p>
            </div>
            <button className="btn btn-success d-block mx-auto w-25 mt-3" onClick={()=>handleBackLibrary()}>Back to library</button>
        </Container>
    )
}

export default ShowResult
