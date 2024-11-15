import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Slices/counterSlice'

// variable name can be change
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})