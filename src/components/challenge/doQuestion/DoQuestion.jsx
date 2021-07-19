import React, { useState, useRef, useEffect } from 'react'
import { Container } from "./style"
import { useSelector, useDispatch } from "react-redux"
import AnswerItem from './AnswerItem'
import Countdown from 'react-countdown';
import Alert from './Alert';
import { nextQuestion } from "../../../slice/challengeSlice"
function DoQuestion({ setFinishQuiz,setShowQuestion,setTime }) {
    const challenge = useSelector(state => state.challenge)
    let currentQuestion = challenge.currentQuestion
    const dispatch = useDispatch()
    const [chooseAnswer, setChooseAnswer] = useState(null)
    const [isClickAnswer, setIsClickAnswer] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const countDownRef = useRef()
    useEffect(() => {
        setIsClickAnswer(false)
        setShowResult(false)
    }, [currentQuestion.id])
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            setShowResult(false)
            setIsClickAnswer(true)
            return ""

            // alert(1)
        } else {
            // Render a countdown
            return <span>{minutes * 60 + seconds}</span>;
        }
    };
    function handleNextQuestion() {
        console.log(challenge)
        if (challenge.result.length == challenge.quiz.listQuizs.length) {
            setFinishQuiz(true)
        }
        else {
            dispatch(nextQuestion())
            // setShowQuestion(true)
            // setTime(0)
        }
    }
    return (
        <Container>
            <div className="question">
                {
                    currentQuestion.question
                }
            </div>

            {isClickAnswer ?
                showResult ?
                    <Alert status="true" isClickAnswer={isClickAnswer}>
                        <h3>Correct</h3>
                        <span>+100</span>
                    </Alert> :
                    <Alert status="false" isClickAnswer={isClickAnswer}>
                        <h3>Wrong</h3>
                        <span>It's not over just yet</span>
                    </Alert> :
                ""}
            <div className="img">
                <img src={currentQuestion.image} alt="" />
            </div>
            {!isClickAnswer && <div className="count-down">
                <Countdown ref={countDownRef} controlled={false} renderer={renderer} date={Date.now() + currentQuestion.timeLimit * 1000} />
            </div>}
            <button className="btn btn-primary next" onClick={() => handleNextQuestion()}>Next</button>
            <div className="answers">
                <AnswerItem type="triangle" color="#e21b3c" order="answer_1" answer={currentQuestion?.answers.answer_1} isClickAnswer={isClickAnswer} setIsClickAnswer={setIsClickAnswer} setShowResult={setShowResult} >1</AnswerItem>
                <AnswerItem type="rhombus" color="#1368ce" order="answer_2" answer={currentQuestion?.answers.answer_2} isClickAnswer={isClickAnswer} setIsClickAnswer={setIsClickAnswer} setShowResult={setShowResult}>2</AnswerItem>
                <AnswerItem type="circle" color="#d89e00" order="answer_3" answer={currentQuestion?.answers.answer_3} isClickAnswer={isClickAnswer} setIsClickAnswer={setIsClickAnswer} setShowResult={setShowResult}>3</AnswerItem>
                <AnswerItem type="rectangle" color="#26890c" order="answer_4" answer={currentQuestion?.answers.answer_4} isClickAnswer={isClickAnswer} setIsClickAnswer={setIsClickAnswer} setShowResult={setShowResult}>4</AnswerItem>
            </div>
        </Container>
    )
}

export default DoQuestion
