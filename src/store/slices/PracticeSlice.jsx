import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../AsyncThunk/AsyncThunk";

const PracticeSlice = createSlice({
    name: "practice",
    initialState:{
        data:[
            {id:1,name:"raj vaja"},
            {id:2,name:"bhavin vaja"},

        ],
        users:[],
        loader:false,
        Error:{}
    },
    reducers:{
        addData:(state,action)=>{
            // console.log(action)
            // console.log(state.data)
            state.data = [...state.data,action.payload]
        },
    },

    extraReducers:{
        [getData.pending]:(state,action)=>{
                state.loader = true;
        },
        [getData.fulfilled]:(state,action)=>{
            state.loader = false;
            state.users = action.payload;
         },
         [getData.rejected]:(state,action)=>{
            state.Error = action.payload;
         }
    }
})

export const {addData} = PracticeSlice.actions;
export default PracticeSlice.reducer