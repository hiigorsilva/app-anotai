import { Button } from "../utils/Button";

export function TodoForm() {

  return (
    <div className="flex items-center w-full h-12 space-x-2">
      <input
        type="text"
        placeholder="Adicione uma tarefa..."
        className="w-full h-full rounded-lg bg-zinc-800 p-4 shadow-zinc-950/30 shadow-md outline-none outline-offset-0 focus:outline focus:outline-sky-600"
      />
      <Button variant="primary" size="default">
        Criar
      </Button>
    </div>
  )
}