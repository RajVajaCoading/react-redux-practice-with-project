import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("async",async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("async data",res.data)
    return res.data;
})