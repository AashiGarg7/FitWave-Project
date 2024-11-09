import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromCookies } from "../../utils/getToken.js";
const initialState = {
    isAuthenticated: getTokenFromCookies(),
};
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        addcookie: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        removecookie: (state) => {
            state.isAuthenticated = false;
        }
    }
})

// auth
export const authselector= (state) => state.Auth.isAuthenticated;
export const { addcookie, removecookie } = authSlice.actions;
export default authSlice.reducer;

