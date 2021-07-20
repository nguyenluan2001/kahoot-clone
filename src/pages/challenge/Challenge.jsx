import React, { useEffect, useState } from 'react'
import Lobby from '../../components/challenge/lobby/Lobby'
import { useParams } from "react-router-dom"
import { fetchQuizById } from "../../slice/challengeSlice"
import { useDispatch, useSelector } from "react-redux"
import ShowQuestion from '../../components/challenge/showQuestion/ShowQuestion'
import DoQuestion from '../../components/challenge/doQuestion/DoQuestion'
import ShowResult from '../../components/challenge/showResult/ShowResult'
let timeToReady = null
function Challenge() {
    const { id } = useParams()
    const challenge = useSelector(state => state.challenge)
    const [showQuestion, setShowQuestion] = useState(true)
    const [time, setTime] = useState(0)
    const [finishQuiz, setFinishQuiz] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchQuizById(id))
    }, [])
    useEffect(() => {
        timeToReady = setInterval(() => {
            setTime(pre => pre + 1)
        }, 1000)
    }, [])
    useEffect(() => {
        if (time == 5) {
            setShowQuestion(false)
            setTime(0)
            clearInterval(timeToReady)
        }
    }, [time])
    useEffect(() => {
        clearInterval(timeToReady)
        timeToReady = setInterval(() => {
            setTime(pre => pre + 1)
        }, 1000)
    }, [challenge.currentQuestion.id])
    console.log(challenge)
    return (
        <div>
            {finishQuiz ? <ShowResult></ShowResult> : (showQuestion ? <ShowQuestion time={time}></ShowQuestion> : <DoQuestion setFinishQuiz={setFinishQuiz} setShowQuestion={setShowQuestion} setTime={setTime}></DoQuestion>)}
        </div>
    )
}

export default Challenge
