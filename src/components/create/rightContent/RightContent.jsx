import React, { useState } from 'react'
import { RightContentContainer } from "./style"
import { FaRegClock, FaMedal, FaChevronRight } from "react-icons/fa"
import { updateSettingCurrentQuiz } from "../../../slice/quizSlice"
import { useDispatch } from "react-redux"
function RightContent({ toggleSetting }) {
    const [input, setInput] = useState({ timeLimit: "", point: "" })
    const dispatch = useDispatch()
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
        if (e.target.name == "timeLimit") {
            dispatch(updateSettingCurrentQuiz(
                {
                    timeLimit: e.target.value,
                    point: ""
                }
            ))

        }
        else {
            dispatch(updateSettingCurrentQuiz(
                {
                    timeLimit: "",
                    point: e.target.value
                }
            ))
        }
        // func()
        console.log(input)
    }
    return (
        <RightContentContainer toggleSetting={toggleSetting}>
            <div className="time-limit">
                <FaRegClock></FaRegClock>
                <span>Time limit</span>
                <select name="timeLimit" id="" className="form-control" onChange={(e) => handleInput(e)}>
                    <option value="5">5 seconds</option>
                    <option value="10">10 seconds</option>
                    <option value="20">20 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="60">1 minutes</option>
                    <option value="90">1 minutes 30 seconds</option>
                    <option value="120">2 minutes</option>
                    <option value="240">4 minutes</option>

                </select>
            </div>
            <div className="point">
                <FaMedal></FaMedal>
                <span>Points</span>
                <select name="point" id="" className="form-control" onChange={(e) => handleInput(e)}>
                    <option value="standard">
                        Standard
                    </option>
                    <option value="double-points">Double points</option>
                    <option value="no-points">No points</option>
                </select>
            </div>
        </RightContentContainer>
    )
}

export default RightContent
