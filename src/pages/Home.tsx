import { useReducer, useState } from "react";
import { toast } from "sonner";
import { listReducer } from "../reducers/listReducer";
import { Logo } from "../components/Logo/Logo";
import { Header } from "../components/Header";
import { TaskCount } from "../components/TodoCount/TodoTaskCount";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { SidebarActions } from "../components/Sidebar/SidebarActions";
import { Sidebar } from "../components/Sidebar/SidebarContainer";
import { UserGreeting } from "../components/Sidebar/UserGreeting";
import { Separator } from "../components/utils/Separator";
import { TaskItem } from "../components/TodoCount/TodoTaskItem";
import { TodoListEmpty } from "../components/TodoForm/TodoListEmpty";

export function Home() {
  const [list, dispatch] = useReducer(listReducer, [])
  const [addTask, setAddTask] = useState('')

  function handleAddTask() {
    if(addTask.trim() === '') {
      toast.error('Você precisa digitar algo válido.')
      return false
    }

    dispatch({
      type: 'add',
      payload: {
        text: addTask.trim()
      }
    })
    toast.success('Tarefa adicionada com sucesso!')
    setAddTask('')
  }

  function handleDoneTask(id: number) {
     dispatch({
      type: 'toggleDone',
      payload: { id }
    })
  }

  function handleRemoveTask(id: number) {
     dispatch({
      type: 'remove',
      payload: { id }
    })
    toast.success(`Tarefa excluída com sucesso!`)
  }
  
  function handleEditTask(id: number) {
    const task = list.find(item => item.id === id)
    if(!task) return false

    const newText = window.prompt('Editar tarefa...', task.text) 
    ? (toast.success('success')).toString() 
    : null
    
    if(!newText || newText?.trim() === '') return false

     dispatch({
      type: 'editText',
      payload: { id, newText }
    })
  }

  const completedTask = list.filter(item => item.done).length

  return (
    <div className="w-full h-screen flex pl-64">
      <Sidebar>
        <div className="space-y-4 pl-4">
          <Logo />
          <UserGreeting />
        </div>
        <Separator />
        <SidebarActions />
      </Sidebar>

      <main className="flex flex-col items-center flex-1 h-screen">
        <Header />

        <div className="max-w-3xl w-full h-fit space-y-16 px-5 -mt-6">
          <TodoForm
            addTask={addTask}
            setAddTask={setAddTask}
            handleAddTask={handleAddTask}
          />

          <TaskCount
            list={list}
            completedTask={completedTask}
            
          />

          <ul className="w-full flex flex-col space-y-4 pb-10">
            {list?.map((item) => (
              <TaskItem
                key={item.id}
                item={item}
                handleEditTask={handleEditTask}
                handleDoneTask={handleDoneTask}
                handleRemoveTask={handleRemoveTask}
              />
            ))}

            {list.length === 0 && <TodoListEmpty />}
          </ul>
        </div>

      </main>
    </div>
  )
}