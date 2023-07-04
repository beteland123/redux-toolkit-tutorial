
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { openModal } from './modal/modalslice';
const url='https://course-api.com/react-useReducer-cart-project';

const intialState ={
    cartItems:[],
    amount:0,
    total:0,
    isLoading:true

};
export const getCartITems=createAsyncThunk('cart/getCartItems',async(thunkAPI)=>{
    try{
        //thunkAPI.dispatch(openModal())
        const resp=await axios(url)
        return resp.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue('somwthing wen wrong..')
    }
});
const cartSlice =createSlice({
    name:cart,
    intialState,
    reducers :{
        clearCart:(state)=>{
           state.cartITems=[]
        },
        removeItem:(state,action)=>{
           const itemId=action.payload
           state.cartITems=state.cartITems.filter((item)=>item.id!==itemId)
        },
        increase:(state,{payload})=>{
            const cartItem=state.cartITems.fins((item)=>item.id===payload.id)
            cartItem.amount=cartItem.amount +1;
        },
        decrease:(state,{payload})=>{
            const cartItem=state.cartITems.fins((item)=>item.id===payload.id)
            cartItem.amount=cartItem.amount -1;
        },
        calculateTotaals:(sate)=>{
            let amount=0;
            let total=0;
            sate.cartItem.foreach((item)=>{
                amount +=item.amount
                total+=item.amount* item.price
            });
            sate.amount=amount;
            sate.total=total;
        },
        extraReducers:{
            [getCartITems.pending]:(state)=>{
                state.isLoading=true;
            },
            [getCartITems.fulfilled]:(state,action)=>{
                state.isLoading=false;
                state.cartITems=action.payload
            },
            [getCartITems.rejected]:(state,action)=>{
                state.isLoading=false;
                state.cartITems=action.payload
            }
        }
    }
})
// console.log(cartSlice)
export const{clearCart,removeItem,increase,decrease,calculateTotaals} =cartSlice.actions;
export default cartSlice.reducer