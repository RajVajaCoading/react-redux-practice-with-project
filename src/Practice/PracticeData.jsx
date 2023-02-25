import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../store/slices/PracticeSlice';
export const PracticeData = () => {


    const inputRef = useRef();
    const data = useSelector((state)=>{
        return state.practice
    })
    console.log("practice data========>",data)


    const dispacth = useDispatch();

    const submitData =(e)=>{
        e.preventDefault()
        // console.log(inputRef.current.value)
        dispacth(addData(inputRef.current.value));
        inputRef.current.value = ""
    }
  return (
    
    <>
    <form onSubmit={submitData}>
        <input type="text" placeholder='enter name' ref={inputRef}/>
        <input type="submit" value="add" />
    </form>
    </>
  )
}
