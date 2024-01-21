import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import ToDoStore from './Redux/TodoStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={ToDoStore}> <App /></Provider>
  </React.StrictMode>,
)
