import { configureStore, createSlice } from '@reduxjs/toolkit'

//상품 상세페이지에 데이터 전달
let detailData = createSlice({
    name: 'detailData',
    initialState : {},
    reducers : {
      addDetailData(state,action){
        state.data = action.payload
        localStorage.setItem("itemData",JSON.stringify(action.payload));
      }
    }
  })
export let {addDetailData} = detailData.actions;

//latest 데이터 값 받기
let latestData = createSlice({
  name : 'latestData',
  initialState : {},
  reducers : {
    addLatestData(state,action){
      state.data = action.payload
    }
  }
})
export let {addLatestData} = latestData.actions;


export default configureStore({
  reducer: {
    detailData : detailData.reducer,
    latestData : latestData.reducer
   }
}) 