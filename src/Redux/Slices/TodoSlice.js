import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:'todos',
    initialState:{
        ToDos:[],
        completeTodo:[]
    },
    
    reducers:{
        addToTodos:(state,action)=>{
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                status:false
            }
            state.ToDos.push(newTodo)
        },
        checkTodo:(state,action)=>{
            const {id,status}=action.payload
            state.ToDos.filter(item=>{
                if(item.id==id){
                    item.status=status
                }
                return item
            })
            const completed=state.ToDos.filter(items=>items.status).length
            state.completeTodo=completed
        },
        removeTodo:(state,action)=>{
            const filteredTodo=state.ToDos.filter(items=>items.id!=action.payload)
            state.ToDos=filteredTodo
            const completed=state.ToDos.filter(items=>items.status).length
            state.completeTodo=completed
        }
    }
})
export const {addToTodos,checkTodo,removeTodo}=TodoSlice.actions
export default TodoSlice.reducer