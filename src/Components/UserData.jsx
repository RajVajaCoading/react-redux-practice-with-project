import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteAllUser } from './DeleteAllUsers'
import { removeUser } from '../store/slices/UserSlice'

const UserData = () => {
    const data = useSelector((state)=>{
        return state.user;
    })
    console.log("user data =====>",data)

const dispatch = useDispatch();

const deleteUser =(id)=>{
    dispatch(removeUser(id))
}



  return (
    <div>
        {
            data.map((users,id)=>{
                console.log("users====>",users)
                return (
                    <>
                    <li key={id}>
                        {users}
                        <button onClick={()=>deleteUser(id)}>Delete</button>
                        
                    </li>
                    
                    </>
                )
            })
        }
    </div>
  )
}

export default UserData