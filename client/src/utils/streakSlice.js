import { createSlice } from "@reduxjs/toolkit";

const initialStateofstreak={
    isActive:false
}
const streaklslice=createSlice({
    name:'Streak',
    initialState:initialStateofstreak,
    reducers:{
        activateStreak:(state) => {
            state.isActive=true
        }
    }
})

export default streaklslice.reducer;
export const {activateStreak}=streaklslice.actions;
export const authSliceSelector=(state)=>state.Streak.isActive;