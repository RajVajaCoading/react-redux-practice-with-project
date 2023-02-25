import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/slices/CounterSlice';
import { decrement } from '../store/slices/CounterSlice';
const IncrementAndDecremet = () => {
  const dispatch = useDispatch();

    const count = useSelector((state) => {
        return state.counter.value
    })
    console.log("state=====>",count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>inc +</button>
        <button onClick={()=>dispatch(decrement())}>dec -</button>
    </div>
  )
}

export default IncrementAndDecremet