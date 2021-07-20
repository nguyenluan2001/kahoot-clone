import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    title: "",
    description: "",
    coverImg: null,
    coverImgName:null,
    coverImgFile: null,
    coverImgPreview: null,
    readySave: false,
    readyEdit: false,
    currentQuiz: {
        id: 10000,
        question: "",
        answers: {
            answer_1: {
                answer: "",
                check: false
            },
            answer_2: {
                answer: "",
                check: false
            },
            answer_3: {
                answer: "",
                check: false
            },
            answer_4: {
                answer: "",
                check: false
            }
        },
        correct: "",
        timeLimit: "5",
        point: "standard",
        image: null,
        imageName:null,
        imagePreview: null,
        imageFile: null

    },
    listQuizs: [

        {
            id: 10000,
            question: "",
            answers: {
                answer_1: {
                    answer: "",
                    check: false
                },
                answer_2: {
                    answer: "",
                    check: false
                },
                answer_3: {
                    answer: "",
                    check: false
                },
                answer_4: {
                    answer: "",
                    check: false
                }
            },
            correct: null,
            timeLimit: "5",
            point: "standard",
            image: null,
            imgName:null,
            imagePreview: null,
            imageFile: null
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
        resetState:(state,action)=>{
            console.log('reset state',initialState)
            return initialState
        },
        setCurrentQuiz: (state, action) => {
            let newCurrentQuiz = state.listQuizs.find(item => {
                return item.id == action.payload.id
            })
            console.log(action.payload)
            state.currentQuiz = newCurrentQuiz
        },
        updateCurrentQuiz: (state, action) => {
            state.currentQuiz.question = action.payload.question == "" ? state.currentQuiz.question : action.payload.question
            state.currentQuiz.answers = action.payload.answers == {} ? state.currentQuiz.answers : action.payload.answers
            state.currentQuiz.correct = action.payload.correct == "" ? state.currentQuiz.correct : action.payload.correct
            state.currentQuiz.imageFile = action.payload.imageFile == null ? state.currentQuiz.imageFile : action.payload.imageFile
            state.currentQuiz.imagePreview = action.payload.imagePreview == null ? state.currentQuiz.imagePreview : action.payload.imagePreview
            // state.currentQuiz.imageName=action.payload.imageName==null?state.currentQuiz.imageName:action.payload.imageName
            let newListQuizs = state.listQuizs.map((item) => {
                if (item.id == state.currentQuiz.id) {
                    return state.currentQuiz
                }
                else {
                    return item
                }

            })
            state.listQuizs = newListQuizs
        },
        updateSettingCurrentQuiz: (state, action) => {
            state.currentQuiz.timeLimit = action.payload.timeLimit == "" ? state.currentQuiz.timeLimit : action.payload.timeLimit
            state.currentQuiz.point = action.payload.point == "" ? state.currentQuiz.point : action.payload.point
            let newListQuizs = state.listQuizs.map((item) => {
                if (item.id == state.currentQuiz.id) {
                    return state.currentQuiz
                }
                else {
                    return item
                }

            })
            state.listQuizs = newListQuizs
            // console.log(action)
        },
        updateSummary: (state, action) => {
            state.title = action.payload.title
            state.description = action.payload.description
            state.coverImgPreview = action.payload.cover_img
            state.coverImgFile = action.payload.cover_img
        },
        addQuiz: (state, action) => {
            let newQuiz = {
                id: Math.floor(Math.random() * 10000),
                question: "",
                answers: {
                    answer_1: {
                        answer: "",
                        check: false
                    },
                    answer_2: {
                        answer: "",
                        check: false
                    },
                    answer_3: {
                        answer: "",
                        check: false
                    },
                    answer_4: {
                        answer: "",
                        check: false
                    }
                },
                correct: "999",
                timeLimit: 5,
                point: "standard",
                image: null,
                imageFile: null,
                imagePreview: null,

            }
            state.currentQuiz = newQuiz
            state.listQuizs.push(newQuiz)

        },
        deleteQuiz: (state, action) => {
            let newListQuizs = state.listQuizs.filter(item => {
                return item.id != action.payload.id
            })
            state.listQuizs = newListQuizs
            state.currentQuiz = [...state.listQuizs].pop()
        },
        updateQuiz: (state, action) => {
            if (action.payload.typeImg == "coverImg") {
                state.coverImg = action.payload.imgURL
                state.coverImgName=action.payload.imgName
                state.coverImgFile = null
                state.coverImgPreview = null
            }
            else {
                let newListQuizs = state.listQuizs.map(item => {
                    if (item.id == action.payload.quizId) {
                        return { ...item, image: action.payload.imgURL,imageName:action.payload.imgName, imageFile: null, imagePreview: null }
                    }
                    else {
                        return item
                    }
                })
                state.listQuizs = newListQuizs
            }
        },
        CanSaveToDatabase: (state, action) => {
            state.readySave = action.payload
        },
        setQuizEdit: (state, action) => {
            state.currentQuiz = action.payload.listQuizs[0]
            state.listQuizs=action.payload.listQuizs
            state.title=action.payload.title
            state.description=action.payload.description
            state.coverImg=action.payload.coverImg
            state.coverImgName=action.payload.coverImgName
        },
        // setListQuizsEdit: (state, action) => {
        //     state.listQuizs = action.payload
        // },
        CanEditQuiz: (state, action) => {
            state.readyEdit = action.payload
        }
    }

})
export const {
    updateCurrentQuiz,
    updateSettingCurrentQuiz,
    setCurrentQuiz,
    deleteQuiz,
    addQuiz,
    updateSummary,
    updateQuiz,
    CanSaveToDatabase,
    CanEditQuiz,
    setQuizEdit,
    resetState
} = quizSlice.actions
export default quizSlice.reducer