import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
