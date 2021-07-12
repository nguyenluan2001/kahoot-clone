import React from 'react'
import { LeftContentContainer, QuizItem,WrapListQuiz } from "./style"
import { FaTrashAlt, FaClone } from "react-icons/fa"
import { useSelector,useDispatch } from "react-redux"
import {setCurrentQuiz,deleteQuiz,addQuiz} from "../../../slice/quizSlice"
function LeftContent() {
    const quiz = useSelector(state => state.quiz)
    const dispatch=useDispatch()
    const arrayAnswers=[0,1,2,3]
    function handleChooseQuiz(quiz)
    {
        dispatch(setCurrentQuiz(quiz))
    }
    function handleDelete(quiz)
    {
        dispatch(deleteQuiz(quiz))
        // alert(111)
    }
    function handleAddQuiz()
    {
        dispatch(addQuiz())
    }
    return (
        <LeftContentContainer>
            <WrapListQuiz>

            {quiz.listQuizs.map(item => {
                return <QuizItem >
                    <div className="action">
                        <FaClone></FaClone>
                        <FaTrashAlt onClick={()=>handleDelete(item)}></FaTrashAlt>
                    </div>
                    <div className="content" onClick={()=>handleChooseQuiz(item)}>
                        <p className="question">{item.question}</p>
                        <div className="wrap-time">
                            <div className="time">20</div>
                        </div>
                        <div className="answers">
                            {
                                arrayAnswers.map(answer => {
                                    if(answer==item.correct)
                                    {
                                        return <div className="answer correct"></div>
                                    }
                                    else
                                    {
                                        return <div className="answer"></div>
                                    }
                                })
                            }
                            {/* <div className="answer"></div>
                            <div className="answer"></div>
                            <div className="answer"></div>
                            <div className="answer"></div> */}
                        </div>
                    </div>
                </QuizItem>
            })}
            </WrapListQuiz>
            <button className="btn btn-primary w-75 mx-auto d-block" onClick={()=>handleAddQuiz()}>Add question</button>
        </LeftContentContainer>
    )
}

export default LeftContent
