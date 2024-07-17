import { Trash2 } from "lucide-react";
import { Button } from "../utils/Button";

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

      <Button variant="tertiary" size="icon">
        <Trash2 className="size-4" />
      </Button>
    </li>
  )
}