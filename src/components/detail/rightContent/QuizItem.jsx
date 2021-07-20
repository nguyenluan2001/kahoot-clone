import React,{useState,useEffect} from 'react'
import AnswerItem from './AnswerItem'
import { QuizItemContainer } from './style'

function QuizItem({question,showAllAnswers,index}) {
    console.log(question)
    const [showAnswers,setAnswers]=useState(false)
    useEffect(()=>{
        if(showAllAnswers)
        {
            setAnswers(true)
        }
        else
        {
            setAnswers(false)
        }
    },[showAllAnswers])
    return (
        <QuizItemContainer onClick={()=>setAnswers(pre=>!pre)}>
            <div className="info">
                <div className="left-content">
                    <p>{index} - Quiz</p>
                    <p className="question">{question?.question}</p>
                </div>
                <div className="right-content">
                    <img src={question?.image?question?.image:"https://assets-cdn.kahoot.it/builder/v2/assets/placeholder-cover-kahoot.ea3003d9.png"} alt="" />
                    <div className="time">{question.timeLimit} sec</div>
                </div>
            </div>
            {showAnswers&&<div className="answers">
                <AnswerItem order="answer_1" correct={question.correct} color="#e21b3c" type="triangle" answer={question.answers.answer_1}></AnswerItem>
                <AnswerItem order="answer_2" correct={question.correct} color="#1368ce" type="rhombus" answer={question.answers.answer_2}></AnswerItem>
                <AnswerItem order="answer_3" correct={question.correct} color="#d89e00" type="circle" answer={question.answers.answer_3}></AnswerItem>
                <AnswerItem order="answer_4" correct={question.correct} color="#26890c" type="rectangle" answer={question.answers.answer_4}></AnswerItem>

            </div>}
            

        </QuizItemContainer>
    )
}

export default QuizItem
