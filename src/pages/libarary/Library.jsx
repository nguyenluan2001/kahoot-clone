import React, { useState, useEffect } from 'react'
import RightContent from '../../components/library/rightContent/RightContent'
import { firestore } from "../../firebase"
import { LibraryContainer } from './style'
function Library() {
    const [quizs, setQuizs] = useState([])
    useEffect(() => {
        firestore.collection('quizs').get().then(res => {
            console.log(res.docs)
            res.docs.forEach(item => {

                setQuizs(pre => [...pre, item])
            })
        })
    }, [])
   

    // console.log(Object.values(quizs[0]?.listQuizs[1].answers));
    return (
        <LibraryContainer>
           <RightContent quizs={quizs}></RightContent>
        </LibraryContainer>
    )
}

export default Library
