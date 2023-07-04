import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isopen:false
}
const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        openModal :(state,action) =>{
            state.isopen=true;
        },
        closeModal :(state,action) =>{
            state.isopen=false;
        },
    }
})
export const{openModal,closeModal}=modalSlice.actions
export default modalSlice.reducer;