import React from 'react'
import { Container} from "./style"
import QuizItem from './QuizItem'
function RightContent({quizs,setQuizs,setShowPlayModal,setQuizPlay}) {
    return (
        <Container>
            {
                quizs.map(item=>{
                    return <QuizItem 
                    quiz={item}
                    setQuizs={setQuizs}
                    setShowPlayModal={setShowPlayModal}
                    setQuizPlay={setQuizPlay}
                    ></QuizItem>
                })
            }
           
           {/* <QuizItem></QuizItem>
           <QuizItem></QuizItem> */}

        </Container>
    )
}

export default RightContent
