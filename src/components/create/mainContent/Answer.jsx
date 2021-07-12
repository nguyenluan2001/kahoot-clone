import React, { useState, useEffect } from 'react'
import { AnswerContainer } from "./style"
import { FaCheck } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { updateCurrentQuiz } from "../../../slice/quizSlice"
import { QuizItem } from '../leftContent/style'
function Answer({ type, color, children, answer, order }) {
    const [typing, setTyping] = useState(false)
    const [check, setCheck] = useState(false)
    const [numChar, setNumChar] = useState(75)
    const quiz = useSelector(state => state.quiz)
    const dispatch = useDispatch()
    useEffect(() => {
        setTyping(false)
        setCheck(false)

        for (let item in quiz.currentQuiz.answers) {
            let attribute = item
            if (item == `answer_${order}` && quiz.currentQuiz.answers[attribute].answer != "") {
                setTyping(true)
                break;
            }
        }
        for (let item in quiz.currentQuiz.answers) {
            let attribute = item
            if (item == `answer_${order}` && quiz.currentQuiz.answers[attribute].check == true) {
                setCheck(true)
                break;
            }
        }
        setNumChar(75)
    }, [quiz.currentQuiz.id])
    function handleInput(e) {
        if (e.target.value != "") {
            setTyping(true)
            setNumChar(75 - e.target.value.length)
            switch (order) {
                case "1":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_1: { answer: e.target.value, check: false } },
                            correct: quiz.currentQuiz.correct
                        }))
                        break;

                    }
                case "2":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_2: { answer: e.target.value, check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
                case "3":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_3: { answer: e.target.value, check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
                case "4":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_4: { answer: e.target.value, check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
            }



        }
        else {
            setTyping(false)
            switch (order) {
                case "1":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_1: { answer: "", check: false } },
                            correct: quiz.currentQuiz.correct
                        }))
                        break;

                    }
                case "2":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_2: { answer: "", check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
                case "3":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_3: { answer: "", check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
                case "4":
                    {
                        dispatch(updateCurrentQuiz({
                            question: quiz.currentQuiz.question,
                            answers: { ...quiz.currentQuiz.answers, answer_4: { answer: "", check: false } },
                            correct: quiz.currentQuiz.correct

                        }))
                        break;


                    }
            }



        }

        console.log(quiz.currentQuiz)
    }
    function handleCheck() {
        setCheck(pre => !pre)
        if (!check) {
            let newQuiz = { ...quiz.currentQuiz }
            newQuiz.correct = order - 1
            // newQuiz.answers[`answer_${order}`].check=true
            switch (order) {
                case "1":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_1: { ...newQuiz.answers[`answer_${order}`], check: true } },
                            correct: order - 1
                        }
                        dispatch(updateCurrentQuiz(newQuiz))
                        break;

                    }
                case "2":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_2: { ...newQuiz.answers[`answer_${order}`], check: true } },
                            correct: order - 1
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
                case "3":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_3: { ...newQuiz.answers[`answer_${order}`], check: true } },
                            correct: order - 1
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
                case "4":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_4: { ...newQuiz.answers[`answer_${order}`], check: true } },
                            correct: order - 1
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
            }
            console.log(newQuiz)
            // dispatch(updateCurrentQuiz(
            //     newQuiz
            // ))
        }
        else {
            let newQuiz = { ...quiz.currentQuiz }
            newQuiz.correct = ""
            switch (order) {
                case "1":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_1: { ...newQuiz.answers[`answer_${order}`], check: false } },
                            correct: null
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;

                    }
                case "2":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_2: { ...newQuiz.answers[`answer_${order}`], check: false } },
                            correct: null
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
                case "3":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_3: { ...newQuiz.answers[`answer_${order}`], check: false } },
                            correct: null
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
                case "4":
                    {
                        newQuiz = {
                            ...newQuiz,
                            answers: { ...newQuiz.answers, answer_4: { ...newQuiz.answers[`answer_${order}`], check: false } },
                            correct: null
                        }
                        dispatch(updateCurrentQuiz(newQuiz))

                        break;


                    }
            }
            console.log(newQuiz)

        }
    }
    return (
        <AnswerContainer color={color} typing={typing} check={check} className={typing && "typing"}>
            <div className="wrap-icon">
                <div className={`icon-${type}`}></div>
            </div>
            <form action="">
                <input type="text" value={answer.answer} placeholder={`Add answer ${children}`} onChange={(e) => handleInput(e)} />
            </form>
            {typing && <div className="wrap-check">
                <span className="num_char">{numChar}</span>
                <div className="check" onClick={() => handleCheck()}>
                    <FaCheck></FaCheck>
                </div>
            </div>}
        </AnswerContainer>
    )
}

export default Answer
