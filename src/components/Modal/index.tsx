import { X } from "lucide-react"
import { Button } from "../utils/Button"

type ModalProps = {
  closeModal: () => void
}

export function Modal({ closeModal }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/85 flex justify-center items-center z-50">
      <div className="max-w-2xl w-full p-6 rounded-lg bg-zinc-900 space-y-6">
        <header className="flex justify-between items-center">
          <span className="font-semibold text-lg text-zinc-100">Editar tarefa</span>
          <Button
            onClick={closeModal}
            variant="tertiary"
            size="icon"
          >
            <X className="size-4 text-zinc-100" />
          </Button>
        </header>
        <div>
          <div className="flex items-center w-full h-12 space-x-2">
            <input
              type="text"
              placeholder="Adicione uma tarefa..."
              value={addTask}
              onChange={(e) => setAddTask(e.target.value)}
              onKeyUp={handleAddKeyPress}
              className="w-full h-full rounded-lg bg-zinc-800 p-4 shadow-zinc-950/30 shadow-md outline-none outline-offset-0 focus:outline focus:outline-sky-600"
            />
            <Button onClick={() => handleEditTask(item.id)} variant="primary" size="default">
              Criar
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}