import React, { useState, useEffect } from 'react'
import RightContent from '../../components/library/rightContent/RightContent'
import ModalPlay from '../../components/modalPlay/ModalPlay'
import { firestore } from "../../firebase"
import { LibraryContainer } from './style'
function Library() {
    const [quizs, setQuizs] = useState([])
    const [showPlayModal,setShowPlayModal]=useState(false)
    const [quizPlay,setQuizPlay]=useState(null)
    useEffect(() => {
        firestore.collection('quizs').onSnapshot(res => {
            let listQuizs = []
            res.docs.forEach(item => {
                listQuizs.push(item)
            })
            setQuizs(listQuizs)
        })
    }, [])


    // console.log(Object.values(quizs[0]?.listQuizs[1].answers));
    return (
        <LibraryContainer>
            <RightContent quizs={quizs} setQuizs={setQuizs} setShowPlayModal={setShowPlayModal} setQuizPlay={setQuizPlay}></RightContent>
            {showPlayModal&&<ModalPlay quizPlay={quizPlay} setShowPlayModal={setShowPlayModal}></ModalPlay>}
        </LibraryContainer>
    )
}

export default Library
