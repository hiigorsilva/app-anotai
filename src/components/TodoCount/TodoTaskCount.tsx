export function TaskCount() {

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="text-sm">
        Tarefas criadas <span className=" text-xs py-0.5 px-2 rounded-xl bg-zinc-700">5</span>
      </div>
      <div className="text-sm">
        Tarefas concluídas <span className=" text-xs py-0.5 px-2 rounded-xl bg-zinc-700">4 de 8</span>
      </div>
    </div>
  )
}