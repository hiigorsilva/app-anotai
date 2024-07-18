import { Edit, Trash2 } from "lucide-react";
import { Button } from "../utils/Button";
import { Tasks } from "../../types/Task";

type TaskItemProps = {
  item: Tasks
  handleEditTask: (id: number) => void
  handleDoneTask: (id: number) => void
  handleRemoveTask: (id: number) => void
}

export function TaskItem({
  item,
  handleEditTask,
  handleDoneTask,
  handleRemoveTask,  
}: TaskItemProps) {

  return (
    <li className={`flex justify-between items-center p-4 rounded-lg bg-zinc-800/50 border border-zinc-700`}>
      <div className="flex items-center gap-4">
        <input 
          type="checkbox" 
          checked={item.done}
          onChange={() => handleDoneTask(item.id)}
          aria-label="Marcar como feito"
          className="size-4 accent-sky-600 outline-none"
        />

        <span className={`text-zinc-50 text-wrap ${item.done && 'line-through text-zinc-500'}`}>
          {item.text} 
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          onClick={() => handleEditTask(item.id)}
          aria-label="Editar tarefa"
          variant="tertiary"
          size="icon"
        >
          <Edit className="size-4" />
        </Button>
        
        <Button 
          onClick={() => handleRemoveTask(item.id)}
          aria-label="Excluir tarefa"
          variant="tertiary"
          size="icon"
        >
          <Trash2 className="size-4" />
        </Button>
      </div>

    </li>
  )
}