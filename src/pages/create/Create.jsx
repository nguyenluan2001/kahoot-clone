import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import { Link } from "react-router-dom"
import { Navbar, Content, Wrapper } from "./style"
import LeftContent from '../../components/create/leftContent/LeftContent'
import MainContent from "../../components/create/mainContent/MainContent"
import RightContent from "../../components/create/rightContent/RightContent"
import Summary from '../../components/create/summary/Summary'
import { useSelector, useDispatch } from "react-redux"
import { updateQuiz, CanSaveToDatabase, CanEditQuiz, setCurrentQuiz, setQuizEdit, resetState } from "../../slice/quizSlice"
import { storage, firestore, auth } from "../../firebase"
import { useHistory, useParams } from "react-router-dom"
function Create() {
    const [toggleSetting, setToggleSetting] = useState(false)
    const [showSummary, setShowSummary] = useState(false)
    const [summary, setSummary] = useState({
        title: "",
        description: "",
        image: ""
    })
    const quiz = useSelector(state => state.quiz)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        dispatch(resetState())
    }, [])
    useEffect(() => {
        if (quiz.readySave) {
            saveToDatabase()
            console.log(quiz)
        }
    }, [quiz.readySave])
    useEffect(() => {
        if (quiz.readyEdit) {
            editQuiz()
            console.log(quiz)
        }
    }, [quiz.readyEdit])
    useEffect(() => {
        if (id != null) {
            firestore.collection('quizs').doc(id).get()
                .then((res) => {
                    let quiz = res.data()
                    console.log(res.data())
                    // dispatch(setCurrentQuizEdit(quiz.listQuizs[0]))
                    // dispatch(setListQuizsEdit(quiz.listQuizs))
                    dispatch(setQuizEdit(quiz))

                })
        }
    }, [id])
    async function handleDoneQuiz() {
        let storageRef = storage.ref()
        if (quiz.coverImgFile != null) {
            let uploadCoverImg = await storageRef.child(quiz.coverImgFile.name)
                .put(quiz.coverImgFile)
            let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.coverImgFile.name}`).getDownloadURL();
            console.log('Cover image available at', downloadURL);
            dispatch(updateQuiz({
                typeImg: "coverImg",
                imgURL: downloadURL,
                imgName: quiz.coverImgFile.name
            }))
        }

        for (let i = 0; i < quiz.listQuizs.length; i++) {
            if (quiz.listQuizs[i].imageFile != null) {
                console.log('uploading...');

                await storageRef.child(quiz.listQuizs[i].imageFile.name)
                    .put(quiz.listQuizs[i].imageFile)
                let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.listQuizs[i].imageFile.name}`).getDownloadURL();
                console.log('werwerwerwer');
                console.log('quiz image available at', downloadURL);
                dispatch(updateQuiz({
                    typeImg: "quizImg",
                    quizId: quiz.listQuizs[i].id,
                    imgURL: downloadURL,
                    imgName: quiz.listQuizs[i].imageFile.name
                }))
            }
        }
        dispatch(CanSaveToDatabase(true))
        // saveToDatabase()

    }
    async function handleEditQuiz() {
        console.log("quiz edit", quiz)

        let storageRef = storage.ref()
        if (quiz.coverImg != null) {
            if (quiz.hasOwnProperty('coverImgFile') && quiz.coverImgFile != null) {
                await storageRef.child(quiz.coverImgName).delete()
                await storageRef.child(quiz.coverImgFile.name)
                    .put(quiz.coverImgFile)
                let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.coverImgFile.name}`).getDownloadURL();
                console.log('Cover image available at', downloadURL);
                dispatch(updateQuiz({
                    typeImg: "coverImg",
                    imgURL: downloadURL,
                    imgName: quiz.coverImgFile.name
                }))
            }
        }
        else {
            if (quiz.hasOwnProperty('coverImgFile') && quiz.coverImgFile != null) {

                await storageRef.child(quiz.coverImgFile.name)
                    .put(quiz.coverImgFile)
                let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.coverImgFile.name}`).getDownloadURL();
                console.log('Cover image available at', downloadURL);
                dispatch(updateQuiz({
                    typeImg: "coverImg",
                    imgURL: downloadURL,
                    imgName: quiz.coverImgFile.name
                }))
            }
        }


        for (let i = 0; i < quiz.listQuizs.length; i++) {
            if (quiz.listQuizs[i].image != null) {
                if (quiz.listQuizs[i].imageFile != null) {
                    console.log('uploading...');
                    await storageRef.child(quiz.listQuizs[i].imageName).delete().then(() => {
                        console.log("delete success")
                    }).catch((err) => {
                        console.log("err", err)
                    })
                    await storageRef.child(quiz.listQuizs[i].imageFile.name)
                        .put(quiz.listQuizs[i].imageFile)
                    let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.listQuizs[i].imageFile.name}`).getDownloadURL();
                    console.log('werwerwerwer');
                    console.log('quiz image available at', downloadURL);
                    dispatch(updateQuiz({
                        typeImg: "quizImg",
                        quizId: quiz.listQuizs[i].id,
                        imgURL: downloadURL,
                        imgName: quiz.listQuizs[i].imageFile.name
                    }))
                }
            }
            else {
                if (quiz.listQuizs[i].imageFile != null) {
                    console.log('uploading...');
                    await storageRef.child(quiz.listQuizs[i].imageFile.name)
                        .put(quiz.listQuizs[i].imageFile)
                    let downloadURL = await storage.refFromURL(`gs://kahoot-d433f.appspot.com/${quiz.listQuizs[i].imageFile.name}`).getDownloadURL();
                    console.log('werwerwerwer');
                    console.log('quiz image available at', downloadURL);
                    dispatch(updateQuiz({
                        typeImg: "quizImg",
                        quizId: quiz.listQuizs[i].id,
                        imgURL: downloadURL,
                        imgName: quiz.listQuizs[i].imageFile.name
                    }))
                }


            }

        }
        dispatch(CanEditQuiz(true))
    }
    function saveToDatabase() {
        console.log("quiz", quiz)

        firestore.collection('quizs').add({
            title: quiz.title,
            description: quiz.description,
            coverImg: quiz.coverImg,
            coverImgName: quiz.coverImgName,
            listQuizs: quiz.listQuizs,
            userId: auth.currentUser.uid
        }).then(() => {
            console.log('Save successful', quiz)
            dispatch(CanSaveToDatabase(false))
            history.push("/me/library")
        }).catch(err => {
            console.log("error", err)
        })
    }
    function editQuiz() {
        console.log("quiz", quiz)
        firestore.collection("quizs").doc(id).update({
            title: quiz.title,
            description: quiz.description,
            coverImg: quiz.coverImg,
            coverImgName: quiz.coverImgName,
            listQuizs: quiz.listQuizs,
        }).then(() => {
            console.log('edit successful', quiz)
            dispatch(CanEditQuiz(false))
            history.push("/me/library")
        })
    }
    return (
        <>
            <Header>
                <Navbar>
                    <div class="input-group w-25" onClick={() => setShowSummary(true)}>
                        <input type="text" class="form-control font-weight-bold" value={quiz.title} placeholder="Enter kahoot title..." aria-label="Username" aria-describedby="basic-addon1" />
                        <div class="input-group-append">
                            <button className="btn btn-primary">Setting</button>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/me/discover" className="btn btn-outline-dark">Exit</Link>
                        {
                            id != null ?
                                <button className="btn btn-success" onClick={() => handleEditQuiz()}>Edit</button> :
                                <button className="btn btn-success" onClick={() => handleDoneQuiz()}>Done</button>

                        }
                    </div>
                </Navbar>
            </Header>
            <Content>
                <LeftContent></LeftContent>
                <Wrapper toggleSetting={toggleSetting}>
                    <MainContent toggleSetting={toggleSetting} setToggleSetting={setToggleSetting}></MainContent>
                    <RightContent toggleSetting={toggleSetting}></RightContent>
                </Wrapper>
            </Content>
            {showSummary && <Summary setShowSummary={setShowSummary} setSummary={setSummary}></Summary>}
        </>
    )
}

export default Create
