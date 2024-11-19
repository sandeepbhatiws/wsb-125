import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counterSlice'
import  cartItems  from './Slices/cart'

// variable name can be change
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart : cartItems,
  },
})