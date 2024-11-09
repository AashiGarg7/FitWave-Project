import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from './slices/slice.js'
import streakSliceReducer from './slices/streakSlice.js';
export const store=configureStore({
    reducer:{
        Auth:authSliceReducer,
        Streak:streakSliceReducer
    }
})