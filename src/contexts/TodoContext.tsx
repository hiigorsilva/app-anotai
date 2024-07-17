import { ReactNode, createContext, useEffect, useState } from "react";


interface TodoProviderProps {
  children: ReactNode
}

interface TodoContext {
  username: string | null
  setUsername: (username: string | null) => void
}

export const TodoContext = createContext<TodoContext>({
  username: null,
  setUsername: () => {}
})

interface TodoProviderProps {
  children: ReactNode
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedUserName = localStorage.getItem('username')
    if(storedUserName) setUsername(storedUserName)
  }, [])

  return (
    <TodoContext.Provider value={{ username, setUsername }}>
      {children}
    </TodoContext.Provider>
  )
}