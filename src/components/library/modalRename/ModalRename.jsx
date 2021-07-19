import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import { firestore } from "../../../firebase"
import {ModalRenameContainer} from "./style"
function ModalRename({ quiz, setShowModalRename, setQuizs }) {
    console.log(quiz)
    const [input, setInput] = useState(null)
    useEffect(() => {
        setInput(quiz.data().title)
    }, [])
    function handleInput(e) {
        setInput(e.target.value)
    }
    function handleRename() {
        firestore.collection('quizs').doc(quiz.id).update({
            title: input
        })
        firestore.collection('quizs').onSnapshot(res => {
            let listQuizs = []
            res.docs.forEach(item => {
                listQuizs.push(item)
            })
            setQuizs(listQuizs)
        })
        setShowModalRename(false)

    }
    return (
        <Modal>
            <ModalRenameContainer>
            <h3>Rename "{input}"</h3>
            <input type="text" className="form-control" value={input} onChange={(e) => handleInput(e)} />
            <div className="buttons">
                <button className="btn btn-dark" onClick={() => setShowModalRename(false)}>Cancel</button>
                <button className="btn btn-success" onClick={() => handleRename()}>Rename</button>
            </div>
            </ModalRenameContainer>
        </Modal>
    )
}

export default ModalRename
