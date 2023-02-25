import React, { useEffect } from 'react'
import { getData } from './AsyncThunk'
import { useDispatch, useSelector } from 'react-redux'



const AsyncThunkData = () => {
    const {users,loader} = useSelector((state)=>{return state.practice})
    const dispacth = useDispatch();
    useEffect(()=>{
        dispacth(getData())
    },[])
  return (
    <>
    {
        loader ? <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : <div>
        {
            users.map((item,index)=>{
                console.log(item.name)
                return(
                    <>
                    <div key={index}>
                    <h1>{item.name}</h1>
                    </div>
                    </>
                )
            })
        }

      </div>
    }
    </>
  )
}

export default AsyncThunkData