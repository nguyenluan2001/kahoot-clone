import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "./slice/quizSlice"
export const store=configureStore({
    reducer:{
        "quiz":QuizReducer
    }
})