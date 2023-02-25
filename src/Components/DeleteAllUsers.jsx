import React from "react";
import { deleteAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const revomeAllUsers = () =>{
    dispatch(deleteAllUsers())
  }
  
  return <div>
  <button onClick={revomeAllUsers}>clear all data </button>
  </div>;
};