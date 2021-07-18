import React, { useState, useRef, useEffect } from 'react'
import Answer from './Answer'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { MainContentContainer, WrapAnswer } from "./style"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateCurrentQuiz } from "../../../slice/quizSlice"
function MainContent({ toggleSetting, setToggleSetting }) {
    const [questionCharacter, setQuestionCharacter] = useState(120)
    const [check, setCheck] = useState(false) // check correct answer
    const quiz = useSelector(state => state.quiz)
    const dispatch = useDispatch()
    const imgRef = useRef()
    const previewRef = useRef()
    useEffect(() => {
        if (quiz.currentQuiz.imagePreview) {
            imgRef.current.style.backgroundImage = `url(${quiz.currentQuiz.imagePreview})`
        }
        else {

            imgRef.current.style.backgroundImage = 'url(https://assets-cdn.kahoot.it/builder/v2/assets/placeholder-cover-kahoot.ea3003d9.png)'

        }
        if (quiz.currentQuiz.image != null && quiz.currentQuiz.imageFile==null)//show image when edit
        {
            imgRef.current.style.backgroundImage = `url("${quiz?.currentQuiz.image}")`
        }
        console.log("quiz",quiz)
    }, [quiz.currentQuiz])
    // useEffect(()=>{
    //     let preview=document.querySelector(".preview")
    //     // preview.style.background="red"
    //    preview.style.backgroundImage = `"url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')"`
    //     console.log("preview", preview.style)
    // },[])
    function handleInputQuestion(e) {
        let numChar = e.target.value.length
        setQuestionCharacter(120 - numChar)
        dispatch(updateCurrentQuiz({
            question: e.target.value,
            answers: quiz.currentQuiz.answers,
            correct: null
        }))
    }
    function handleUploadImage(e) {

        let file = e.target.files[0]
        dispatch(updateCurrentQuiz({
            question: "",
            answers: quiz.currentQuiz.answers,
            correct: "",
            imagePreview: URL.createObjectURL(file),
            imageFile: file,
            imageName:file.name
        }))
        imgRef.current.style.backgroundImage = `url(${URL.createObjectURL(file)})`

    }
    function handlePreview() {
        if (previewRef.current.requestFullscreen) {
            previewRef.current.requestFullscreen();
        }
    }
    return (
        <MainContentContainer toggleSetting={toggleSetting}>
            <div className="question">
                <span></span>
                <input type="text" className="" placeholder="Start typing your answer" value={quiz.currentQuiz.question} onChange={(e) => handleInputQuestion(e)} />
                <span className="num_char">{questionCharacter}</span>
            </div>
            <div className="image" ref={previewRef} >
                <input type="file" hidden id="file" onChange={(e) => handleUploadImage(e)} />
                <div className="preview" ref={imgRef} >
                </div>
                <div className="wrap-btn">
                    <label htmlFor="file" className="upload_img">Upload</label>
                    <label htmlFor="file" className="preview_img" onClick={() => handlePreview()}>Preivew</label>
                </div>
            </div>
            <WrapAnswer>
                <Answer type="triangle" color="#e21b3c" order="1" answer={quiz.currentQuiz.answers.answer_1} check={check} setCheck={setCheck}>1</Answer>
                <Answer type="rhombus" color="#1368ce" order="2" answer={quiz.currentQuiz.answers.answer_2} check={check} setCheck={setCheck}>2</Answer>
                <Answer type="circle" color="#d89e00" order="3" answer={quiz.currentQuiz.answers.answer_3} check={check} setCheck={setCheck}>3</Answer>
                <Answer type="rectangle" color="#26890c" order="4" answer={quiz.currentQuiz.answers.answer_4} check={check} setCheck={setCheck}>4</Answer>
            </WrapAnswer>
            <div className="toggleSetting" onClick={() => setToggleSetting(pre => !pre)}>
                {!toggleSetting ? <FaChevronRight></FaChevronRight> : <FaChevronLeft></FaChevronLeft>}
            </div>
        </MainContentContainer>
    )
}

export default MainContent
