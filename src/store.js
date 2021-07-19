import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "./slice/quizSlice"
import ChallengeReducer from "./slice/challengeSlice"
export const store=configureStore({
    reducer:{
        "quiz":QuizReducer,
        "challenge":ChallengeReducer
    }
})