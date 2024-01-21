import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slices/TodoSlice";

 const ToDoStore=configureStore({
    reducer:{
        TodoSlice
    }
})
export default ToDoStore