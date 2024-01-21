import React, { useEffect, useState } from 'react'
import Todos from './Todos'
import { useDispatch,useSelector } from 'react-redux'
import { addToTodos } from '../Redux/Slices/TodoSlice'
function Home() {
    const [toDo,setToDo]=useState("")
    // const [toDos,setToDos]=useState([])
    const {completeTodo}=useSelector((state)=>state.TodoSlice)
    const dispatch=useDispatch()
  
    const handleAdd=()=>{
        dispatch(addToTodos({
            title:toDo
        }))
    }
  return (
    <div className='container mt-3'>
        <div className='d-flex justify-content-between'>
            <h1>My ToDo List</h1>
            <h4>Completed Task:{completeTodo}</h4>
        </div>
        <div className='w-100 d-flex'>
            <input className='form-control border w-25' value={toDo}  type="text" name="" id="" onChange={(e)=>setToDo(e.target.value)} placeholder='Add ToDo' />
            <button onClick={handleAdd} className='btn border btn-info  fw-bold  ms-3'>Add</button>
        </div>
        <hr className='mt-4 border-2 text-warning' />
        <Todos/>
    </div>
  )
}

export default Home