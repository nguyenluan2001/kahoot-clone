import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import LeftContent from '../../components/detail/leftContent/LeftContent'
import RightContent from '../../components/detail/rightContent/RightContent'
import {firestore} from "../../firebase"
import {DetailContainer} from "./style"
function Detail() {
    const {id}=useParams()
    const [quiz,setQuiz]=useState()
    useEffect(()=>{
        firestore.collection('quizs').doc(id).get()
        .then(res=>{
            console.log(res.data())
            setQuiz(res.data())
        })
    },[])
    return (
        <DetailContainer>
            <LeftContent id={id} quiz={quiz}></LeftContent>
            <RightContent   quiz={quiz}></RightContent>
        </DetailContainer>
    )
}

export default Detail
