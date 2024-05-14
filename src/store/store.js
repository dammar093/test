import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../feature/productsSlice'
import packageReducer from '../feature/packegeSlice'
export const store = configureStore({
  reducer: {
    products:productsReducer,
    packages:packageReducer
  },
})