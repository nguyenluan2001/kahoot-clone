import React,{useState} from 'react'
import QuizItem from './QuizItem'
import { Container } from './style'

function RightContent({quiz}) {
    const [showAllAnswers,setShowAllAnswers]=useState(false)

    return (
        <Container>
            <div className="top-content">
                <span>Questions ({quiz?.listQuizs.length})</span>
                {
                    !showAllAnswers?<button onClick={()=>setShowAllAnswers(true)}>Show answers</button>:<button onClick={()=>setShowAllAnswers(false)}>Hide answers</button>
                }
            </div>
            {
                quiz?.listQuizs.map((item,index)=>{
                    return <QuizItem showAllAnswers={showAllAnswers} question={item} index={index+1}></QuizItem>
                })
            }
        </Container>
    )
}

export default RightContent
