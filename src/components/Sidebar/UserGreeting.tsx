import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export function UserGreeting() {
  const { username } = useContext(TodoContext)

  return (
    <>
      {username && 
        <div className="w-full">
          <span className="text-sm text-green-500 truncate">
            Bem vindo(a), {username}!
          </span>
        </div>
      }
    </>
  )
}