import React, { useState, useEffect } from "react"
import sound5s from "../assets/sound-5s.mp3"
import sound10s from "../assets/sound-10s.mp3"
import sound20s from "../assets/sound-20s.mp3"
import sound30s from "../assets/sound-30s.mp3"
import sound60s from "../assets/sound-60s.mp3"
import sound90s from "../assets/sound-90s.mp3"
import sound120s from "../assets/sound-120s.mp3"
import sound240s from "../assets/sound-240s.mp3"
const useAudio = (timeLimit) => {
    const [audio, setAudio] = useState(null)
    useEffect(() => {
        switch (timeLimit) {
            case "5": {

                setAudio(new Audio(sound5s))
                console.log(timeLimit)
                break;
            }
            case "10": {

                setAudio(new Audio(sound10s))

                break;

            }
            case "20": {

                setAudio(new Audio(sound20s))

                break;

            }
            case "30": {

                setAudio(new Audio(sound30s))

                break;

            }
            case "60": {

                setAudio(new Audio(sound60s))

                break;

            }
            case "90": {

                setAudio(new Audio(sound90s))

                break;

            }
            case "120": {

                setAudio(new Audio(sound120s))

                break;

            }
            case "240": {

                setAudio(new Audio(sound240s))

                break;

            }

        }
    }, [])

    return { audio }
}
export { useAudio }