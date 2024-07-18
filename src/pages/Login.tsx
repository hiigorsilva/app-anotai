import { ArrowRight } from "lucide-react";
import { Logo } from "../components/Logo/Logo";
import { Button } from "../components/utils/Button";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { toast } from "sonner";

export function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const { setUsername: setGlobalUsername } = useContext(TodoContext)

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(!username.trim()) {
      setUsername('')
      return toast.error('Você precisa digitar seu nome', { position: "top-center" })
    }

    setGlobalUsername(username)

    navigate('/app')

  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-10">
      <Logo />
      <form onSubmit={(event) => handleLogin(event)} className="max-w-md w-full space-y-4">
        <div className="space-y-2">
          <label className="sr-only" htmlFor="name">Digite seu nome:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            placeholder="Digite seu nome"
            className="w-full h-full text-zinc-100 rounded-lg bg-zinc-800 p-4 shadow-zinc-950/30 shadow-md outline-none outline-offset-0 focus:outline focus:outline-sky-600"
          />
        </div>
          <Button type="submit"
            size="full"
          >
            Entrar como visitante
            <ArrowRight className="size-5 ml-auto" />
          </Button>
      </form>
    </div>
  )
}