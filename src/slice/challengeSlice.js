import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {firestore} from "../firebase"
import { current } from "@reduxjs/toolkit"
const initialState={
    quiz:{},
    currentQuestion:{},
    result:[]
}
const fetchQuizById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (quizId, thunkAPI) => {
      const response = await firestore.collection("quizs").doc(quizId).get()
      return response
    }
  )
 const challengeSlice=createSlice({
    name:"challenge",
    initialState,
    reducers:{
       updateResult:(state,action)=>{
           state.result.push(action.payload)

       },
       nextQuestion:(state,action)=>{
           let index=state.quiz.listQuizs.findIndex((item)=>item.id==state.currentQuestion.id)
           state.currentQuestion=state.quiz.listQuizs[index+1]
       },
       resetState:(state,action)=>{
           return initialState
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuizById.fulfilled,(state,action)=>{
            state.quiz=action.payload.data()
            state.currentQuestion=action.payload.data().listQuizs[0]
        })
    }
})
export {fetchQuizById}
export const {updateResult,nextQuestion,resetState}=challengeSlice.actions
export default challengeSlice.reducer