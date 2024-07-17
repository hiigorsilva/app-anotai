import { Trash2 } from "lucide-react";
export function TaskItem() {

  return (
    <li className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800 border border-zinc-700">
      <input 
        type="checkbox" 
        className="size-4 accent-sky-600"
      />

      <span className={`text-zinc-50 text-wrap`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>

      <button className="p-1 rounded bg-zinc-700 transition-all hover:bg-red-500">
        <Trash2 className="size-4 " />
      </button>
    </li>
  )
}