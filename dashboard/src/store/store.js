import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import resetPasswordReducer from './slices/resetPasswordSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    resetPassword: resetPasswordReducer, 
  }
})