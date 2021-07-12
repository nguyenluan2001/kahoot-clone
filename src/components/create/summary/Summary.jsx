import React, { useRef, useState } from 'react'
import { Container, Content, LeftContent, RightContent, Info, WrapButton } from "./style"
function Summary({ setShowSummary, setSummary }) {
    const imgSummaryRef = useRef()
    const [input, setInput] = useState({})
    const [error, setError] = useState(false)
    function handleUploadImgSummary(e) {
        let file = e.target.files[0]
        imgSummaryRef.current.style.backgroundImage = `url(${URL.createObjectURL(file)})`
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.files[0] }
        })
        console.log(file)
    }
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value != "" ? e.target.value : "" }
        })
    }
    function handleDone() {
        if (!input.hasOwnProperty('title')) {
            setError(true)
        }
        else {
            setSummary(input)
            setShowSummary(false)
        }
        // console.log()
    }
    return (
        <Container>
            <Content>
                <h3>Kahoot summary</h3>
                <Info>
                    <LeftContent>
                        <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" className="form-control" onChange={(e) => handleInput(e)} />
                            {error&& <p className="text-danger">Title is required</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description (Optional)</label>
                            <textarea name="description" className="form-control" id="" cols="30" rows="5" onChange={(e) => handleInput(e)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Save to</label>
                            <input type="text" className="form-control" placeholder="My Kahoots" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Lobby video</label>
                            <input type="text" className="form-control" placeholder="Paste YouTube link" />
                        </div>
                    </LeftContent>
                    <RightContent>
                        <div className="form-group image">
                            <label htmlFor="">Cover image</label>
                            <input type="file" hidden id="fileSummary" onChange={(e) => handleUploadImgSummary(e)} />
                            <div ref={imgSummaryRef} className="previewSummary">
                                <label htmlFor="fileSummary" className="upload_img">Upload</label>
                            </div>
                        </div>
                        <div className="foorm-group">
                            <label htmlFor="">Language</label>
                            <select name="" id="" className="form-control">
                                <option value="">Vietnamese</option>
                                <option value="">English</option>
                                <option value="">Chinese</option>
                                <option value="">Japanese</option>
                                <option value="">Korea</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Lobby music</label>
                            <select name="" id="" className="form-control">
                                <option value="">Kahoot! pick</option>
                                <option value="">Fantasy</option>
                                <option value="">Adventure</option>
                                <option value="">Disco</option>
                                <option value="">Funk</option>
                            </select>
                        </div>
                    </RightContent>
                </Info>
                <WrapButton>
                    <button className="cancel" onClick={() => setShowSummary(false)}>Cancel</button>
                    <button className="done" onClick={() => handleDone()}>Done</button>
                </WrapButton>
            </Content>

        </Container>
    )
}

export default Summary
