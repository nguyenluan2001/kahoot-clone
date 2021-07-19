import React from 'react'
import Modal from '../modal/Modal'
import { ModalDeleteContainer } from "./style"
import { firestore,storage } from "../../../firebase"
function ModalDelete({ setShowModalDelete, quiz, setQuizs }) {
    async function handleDeleteQuiz() {
        let storageRef=storage.ref()
        await storageRef.child(quiz.data().coverImgName).delete()
        for(let i=0;i<quiz.data().listQuizs.length;i++)
        {
            await storageRef.child(quiz.data().listQuizs[i].imageName).delete()
        }
        await firestore.collection('quizs').doc(quiz.id).delete().then(() => {
        })
        firestore.collection('quizs').onSnapshot(res => {
            let listQuizs = []
            res.docs.forEach(item => {
                listQuizs.push(item)
            })
            setQuizs(listQuizs)
            setShowModalDelete(false)
        })
    }
    return (
        <>

            <Modal>
                <ModalDeleteContainer>
                    <h3>Delete kahoot</h3>
                    <p>Are you sure you want to delete "{quiz.data().title}"? this action can't be undone</p>
                    <div className="buttons">
                        <button className="btn btn-dark" onClick={() => setShowModalDelete(false)}>Cancel</button>
                        <button className="btn btn-danger" onClick={() => handleDeleteQuiz()}>Delete</button>
                    </div>
                </ModalDeleteContainer>
            </Modal>
        </>
    )
}

export default ModalDelete
