import { configureStore, createSlice } from '@reduxjs/toolkit'

let loginCheck = createSlice({
    name: 'loginCheck',
    initialState : {name:'kim',age:0},
    reducers : {
      emailCheck(state){
        console.log(state)
      }
    }
  })
export let {emailCheck} = loginCheck.actions;

export default configureStore({
  reducer: {
    loginCheck : loginCheck.reducer
   }
}) 