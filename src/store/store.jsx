import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";
import CounterSlice from "./slices/CounterSlice";
import PracticeSlice from "./slices/PracticeSlice";
const store = configureStore({
    reducer:{
        user:userSlice,
        counter:CounterSlice,
        practice:PracticeSlice
    }
})

export default store