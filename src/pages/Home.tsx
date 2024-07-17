import { Logo } from "../components/Logo/Logo";
import { Header } from "../components/Header";
import { TaskCount } from "../components/TodoCount/TodoTaskCount";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoListEmpty } from "../components/TodoForm/TodoListEmpty";
import { SidebarActions } from "../components/Sidebar/SidebarActions";
import { Sidebar } from "../components/Sidebar/SidebarContainer";
import { UserGreeting } from "../components/Sidebar/UserGreeting";
import { Separator } from "../components/utils/Separator";

export function Home() {

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

        <div className="max-w-2xl w-full h-fit space-y-16 -mt-6">
          <TodoForm />
          <TaskCount />

          <ul className="w-full flex flex-col space-y-4 pb-10">
            {/* <TodoTaskItem /> */}
            <TodoListEmpty />
          </ul>
          
        </div>
      </main>
    </div>
  )
}