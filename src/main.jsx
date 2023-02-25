import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import IncrementAndDecremet from './Components/IncrementAndDecremet'
import './index.css'
import { PracticeData } from './Practice/PracticeData'
import Store from "./store/store"
import AsyncThunkData from './AsyncThunk/AsyncThunkData'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
     <App /> 
    {/* <IncrementAndDecremet/>
    <PracticeData/>
    <AsyncThunkData></AsyncThunkData> */}
  </Provider>,
)
