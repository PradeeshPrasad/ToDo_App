import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTodo,removeTodo } from '../Redux/Slices/TodoSlice'

function Todos() {
    const [check,setCheck]=useState({id:"",status:""})
    const {ToDos}=useSelector((state)=>state.TodoSlice)
    const dispatch=useDispatch()


    const handleCheck=(status,id)=>{
        setCheck({id:id,status:status})
        dispatch(checkTodo(check))
    }
    useEffect(()=>{
        handleCheck()
    },[check.status])
  return (
    <>
       {
        ToDos.map(items=>(
            <div className='w-100 mt-4 mb-4 shadow border'>
      <div className={items.status&&'bg-info '}>
            <div className='border  d-flex  justify-content-between p-3 rounded '>
                <div className='d-flex '>
                    <input className='' checked={items.status} type="checkbox"  onChange={e=>handleCheck(e.target.checked,items.id)} name="" id="" />
                    <h5 className='ms-3 mt-2'>{items.title}</h5>
                    </div>
                    <div>
                        <button onClick={()=>dispatch(removeTodo(items.id))} className='btn btn-danger'>Delete</button>
                    </div>
                
            </div>
      </div>
    </div>
        ))
       }
    </>
  )
}

export default Todos