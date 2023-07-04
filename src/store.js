import { configureStore} from '@reduxjs/toolkit'
import cartReducer from './feature/cart/cartSlice'
import modalslice from './feature/cart/modal/modalslice'
export const store =configureStore({
    reducer :{
        cart: cartReducer,
        modal:modalslice
    }
})