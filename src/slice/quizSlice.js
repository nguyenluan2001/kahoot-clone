import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentQuiz: {
        id:10000,
        question: "",
        answers: {
            answer_1: {
                answer:"",
                check:false
            },
            answer_2: {
                answer:"",
                check:false
            },
            answer_3: {
                answer:"",
                check:false
            },
            answer_4: {
                answer:"",
                check:false
            }
        },
        correct: "",
        timeLimit:5,
        point:"standard"

    },
    listQuizs: [

        {
            id:10000,
            question: "",
            answers: {
                answer_1: {
                    answer:"",
                    check:false
                },
                answer_2: {
                    answer:"",
                    check:false
                },
                answer_3: {
                    answer:"",
                    check:false
                },
                answer_4: {
                    answer:"",
                    check:false
                }
            },
            correct: null,
            timeLimit:5,
            point:"standard"
        },
        // {
        //     id:10001,
        //     question: "abc",
        //     answers: {
        //         answer_1: "1",
        //         answer_2: "2",
        //         answer_3: "3",
        //         answer_4: "4"
        //     },
        //     correct: "2"
        // }
    ]
}
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setCurrentQuiz:(state,action)=>{
            let newCurrentQuiz=state.listQuizs.find(item=>{
                return item.id==action.payload.id
            })
            console.log("set current quiz")
            state.currentQuiz=newCurrentQuiz
        },
        updateCurrentQuiz:(state,action)=>{
            state.currentQuiz.question=action.payload.question
            state.currentQuiz.answers=action.payload.answers
            state.currentQuiz.correct=action.payload.correct
            let newListQuizs=state.listQuizs.map((item)=>{
                if(item.id==state.currentQuiz.id)
                {
                    return state.currentQuiz
                }
                else {
                    return item
                }
                 
            })
            state.listQuizs=newListQuizs
        },
        updateSettingCurrentQuiz:(state,action)=>{
            state.currentQuiz.timeLimit=action.payload.timeLimit!=""?action.payload.timeLimit:state.currentQuiz.timeLimit
            state.currentQuiz.point=action.payload.point!=""?action.payload.point: state.currentQuiz.point
        },
        addQuiz:(state,action)=>{
            let newQuiz={
                id:Math.floor(Math.random()*10000),
                question: "",
                answers: {
                    answer_1: {
                        answer:"",
                        check:false
                    },
                    answer_2: {
                        answer:"",
                        check:false
                    },
                    answer_3: {
                        answer:"",
                        check:false
                    },
                    answer_4: {
                        answer:"",
                        check:false
                    }
                },
                correct:"999"
            }
            state.currentQuiz=newQuiz
            state.listQuizs.push(newQuiz)
            
        },
        deleteQuiz:(state,action)=>{
            let newListQuizs=state.listQuizs.filter(item=>{
                return item.id!=action.payload.id
            })
            state.listQuizs=newListQuizs
            state.currentQuiz=[...state.listQuizs].pop()
        }
    }

})
export const {updateCurrentQuiz,updateSettingCurrentQuiz,setCurrentQuiz,deleteQuiz,addQuiz}=quizSlice.actions
export default quizSlice.reducer