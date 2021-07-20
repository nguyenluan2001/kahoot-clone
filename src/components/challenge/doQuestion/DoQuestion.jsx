import React, { useState, useRef, useEffect } from 'react'
import { Container } from "./style"
import { useSelector, useDispatch } from "react-redux"
import AnswerItem from './AnswerItem'
import Countdown from 'react-countdown';
import Alert from './Alert';
import { nextQuestion, updateResult } from "../../../slice/challengeSlice"
import { useAudio } from "../../../hooks/useAudio"
import correct from "../../../assets/correct.mp3"
import wrong from "../../../assets/wrong.mp3"
let countDown = null
function DoQuestion({ setFinishQuiz, setShowQuestion }) {
    const challenge = useSelector(state => state.challenge)
    let currentQuestion = challenge.currentQuestion
    const dispatch = useDispatch()
    const [chooseAnswer, setChooseAnswer] = useState(null)
    const [isClickAnswer, setIsClickAnswer] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [time, setTime] = useState(999)
    const countDownRef = useRef()
    const { audio } = useAudio(currentQuestion.timeLimit)
    useEffect(() => {
        console.log(audio)
        audio?.play()
    }, [audio])

    useEffect(() => {
        clearInterval(countDown)
        // console.log(audio.stop())
        audio?.pause()
        setIsClickAnswer(false)
        setShowResult(false)
        setTime(currentQuestion.timeLimit)
        countDown = setInterval(() => {
            setTime(pre => pre - 1)
        }, 1000)
    }, [currentQuestion.id])
    useEffect(() => {
        if (time == 0) {
            let question = { ...currentQuestion, status: false }
            dispatch(updateResult(question))
            setShowResult(false)
            setIsClickAnswer(true)
            audio?.pause()
            clearInterval(countDown)
        }
    }, [time])
    useEffect(() => {
        audio?.pause()
        if(isClickAnswer)
        {
            if (showResult) {
                let audio = new Audio(correct)
                audio.play()
            }
            else {
                let audio = new Audio(wrong)
                audio.play(wrong)
            }
        }
    }, [isClickAnswer])
    function handleNextQuestion() {
        if (challenge.result.length == challenge.quiz.listQuizs.length) {
            setFinishQuiz(true)
        }
        else {
            dispatch(nextQuestion())
            setShowQuestion(true)
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
                {time}
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
