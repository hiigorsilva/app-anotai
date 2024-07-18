import { Button } from "../utils/Button";

type TodoForm = {
  addTask: string
  setAddTask: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: () => void
}

export function TodoForm({ addTask, setAddTask, handleAddTask }: TodoForm) {
  function handleAddKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter') {
      handleAddTask()
      setAddTask('')
    }
  }

  return (
    <div className="flex items-center w-full h-12 space-x-2">
      <input
        type="text"
        placeholder="Adicione uma tarefa..."
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
        onKeyUp={handleAddKeyPress}
        className="w-full h-full rounded-lg bg-zinc-800 p-4 shadow-zinc-950/30 shadow-md outline-none outline-offset-0 focus:outline focus:outline-sky-600"
      />
      <Button onClick={handleAddTask} variant="primary" size="default">
        Criar
      </Button>
    </div>
  )
}