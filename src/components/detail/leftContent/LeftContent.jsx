import React,{useState} from 'react'
import { Container } from "./style"
import { FaRegStar,
     FaEllipsisV,
      FaUserAlt,
      FaTrashAlt,
      FaRegClone,
      FaICursor,
      FaEye,
      FaPrint
     } from "react-icons/fa"
import { firestore } from "../../../firebase"
import {useHistory} from "react-router-dom"
function LeftContent({ quiz, id }) {
    const history=useHistory()
    const [showControlAction,setShowControlAction]=useState(false)
    function handleDelete() {
        firestore.collection('quizs').doc(id).delete().then(()=>{
            history.push('/me/library')
        })
    }
    function handleEdit()
    {
        history.push(`/me/edit/${id}`)
    }
    return (
        <Container>
            <div className="img">
                <img src={quiz?.coverImg} alt="" />
            </div>
            <div className="info">
                <p className="title">{quiz?.title}</p>
                <ul className="statis">
                    <li><strong>0</strong> favorites</li>
                    <li><strong>0</strong> plays</li>
                    <li><strong>0</strong> players</li>
                </ul>
                <div className="actions">
                    <div className="left-action">
                        <button className="btn btn-success mr-3">Play</button>
                        <button className="btn btn-primary" onClick={()=>handleEdit()}>Edit</button>
                    </div>
                    <div className="right-action">
                        <div className="star">
                            <FaRegStar></FaRegStar>
                        </div>
                        <div className="control" >
                            <FaEllipsisV onClick={()=>setShowControlAction(pre=>!pre)}></FaEllipsisV>
                            {showControlAction&&
                             <ul className="control-action">
                             <li>
                                 <FaRegClone></FaRegClone>
                                 Duplicate
                             </li>
                             <li>
                                 <FaICursor></FaICursor>
                                 Rename
                             </li>
                             <li>
                                 <FaEye></FaEye>
                                 Preview
                             </li>
                             <li>
                                 <FaPrint></FaPrint>
                                 Print
                             </li>
                             <li onClick={() => handleDelete()}>
                                 <FaTrashAlt></FaTrashAlt>
                                 Delete
                             </li>
                         </ul>
                            }
                           
                        </div>
                    </div>
                </div>
                <p className="font-weight-bold">A private kahoot</p>
                <p>{quiz?.description}</p>
                <div className="author">
                    <div className="icon">
                        <FaUserAlt></FaUserAlt>
                    </div>
                    <div className="author-info">
                        <p className="author-name">luannguyen</p>
                        <p>Created 1 day ago</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LeftContent
