import { NotepadText } from "lucide-react";

export function TodoListEmpty() {

  return (
    <div className="flex flex-col items-center gap-4">
      <NotepadText strokeWidth={1.5} className="size-14 text-zinc-700" />
      <p className="flex flex-col text-center text-zinc-400">
        <span className="font-semibold">Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer.
      </p>
    </div>
  )
}