import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            // console.log("secound=========>",action.payload);
        },
        removeUser(state,action){
            // console.log("first", action.payload)
            state.splice(action.payload,1)
        },
        deleteAllUsers(state,action){
        //   console.log("delete all users")
        // return state = []; // this is add new empty array
        // this is use for remove all array 
        return [];
        },
    },

    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteAllUsers,(state,action)=>{
            return[];
        })
    }
})


// If action is supposed to be handled by one reducer, use reducers.
// If action is supposed to be handled by multiple reducers, use extraReducers.

export const {addUser,removeUser,deleteAllUsers} = userSlice.actions

export default userSlice.reducer