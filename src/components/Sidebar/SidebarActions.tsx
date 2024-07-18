import { Bolt, CircleGauge, Notebook, Power, User } from "lucide-react";
import { Button } from "../utils/Button";
import { Separator } from "../utils/Separator";
import { useNavigate } from "react-router-dom";

export function SidebarActions() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('username')
    navigate('/')
  }

  return (
    <>
      <div className="w-full flex flex-1 flex-col justify-between gap-2 space-y-8">
        <div className="w-full flex flex-1 flex-col gap-2">
          <Button variant="secondary" size="full">
            <Notebook className="size-5" />
            Tarefas
          </Button>
          <Button variant="secondary" size="full">
            <User className="size-5" />
            Perfil
          </Button>
          <Button variant="secondary" size="full">
            <CircleGauge className="size-5" />
            Dashboard
          </Button>
        </div>

        <Separator />
        
        <div className="w-full flex flex-col gap-2">
          <Button variant="secondary" size="full">
            <Bolt className="size-5" />
            Configurações
          </Button>
          <Button onClick={handleLogout} variant="secondary" size="full">
            <Power className="size-5" />
            Sair
          </Button>
        </div>
      </div>
    </>
  )
}