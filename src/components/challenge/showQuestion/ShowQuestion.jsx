import React from 'react'
import { useSelector } from "react-redux"
import { Container } from './style'

function ShowQuestion({ time }) {
    const challenge = useSelector(state => state.challenge)
    let totalQuestion=challenge.quiz.listQuizs.length
    let progress=time*100/5
    let style={
        width:`${progress}%`
    }
    console.log(totalQuestion)
    return (
        <Container>
            <div className="order-question">
                {challenge.result.length+1} of {totalQuestion}
            </div>
            <div className="question">
                {challenge.currentQuestion.question}
            </div>
            <div className="timeline">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </Container>
    )
}

export default ShowQuestion
