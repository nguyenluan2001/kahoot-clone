import React from 'react'
import { Container} from "./style"
import QuizItem from './QuizItem'
function RightContent({quizs}) {
    return (
        <Container>
            {
                quizs.map(item=>{
                    return <QuizItem quiz={item}></QuizItem>
                })
            }
           
           {/* <QuizItem></QuizItem>
           <QuizItem></QuizItem> */}

        </Container>
    )
}

export default RightContent
