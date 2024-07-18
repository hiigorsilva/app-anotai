import { Tasks } from "../../types/Task"

type TaskCount = {
  list: Tasks[]
  completedTask: number
}

export function TaskCount({ list, completedTask }: TaskCount) {

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="text-sm">
        Tarefas criadas <span className=" text-xs py-0.5 px-2 rounded-xl bg-zinc-700">{list.length}</span>
      </div>
      <div className="text-sm">
        Tarefas concluídas <span className=" text-xs py-0.5 px-2 rounded-xl bg-zinc-700">{completedTask} de {list.length}</span>
      </div>
    </div>
  )
}