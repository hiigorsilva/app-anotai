import { ReactNode } from "react"

interface SidebarProps {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {

  return (
    <aside 
      className="fixed left-0 top-0 bottom-0 max-w-64 w-full h-full 
      flex flex-col items-start space-y-8 px-4 py-8 border-r-2 border-zinc-700
      bg-zinc-900 overflow-y-scroll z-10"
    >
      {children}
    </aside>
  )
}