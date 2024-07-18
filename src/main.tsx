import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { App } from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <Toaster duration={3000} position="top-right" richColors />
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
