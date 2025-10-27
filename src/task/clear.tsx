import type { ReactElement } from 'react'
import { BrushCleaning } from 'lucide-react'
import { useTasks } from './store'

export function TaskClear(): ReactElement {
  const clearTasks = useTasks(state => state.clear)

  return (
    <button
      type="button"
      onClick={clearTasks}
      className="rounded-6 bg-gray-3 p-8 cursor-pointer w-36 h-36"
    >
      <BrushCleaning size={20} />
    </button>
  )
}
