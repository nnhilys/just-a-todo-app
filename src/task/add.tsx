import type { ReactElement } from 'react'
import { Input } from '@base-ui-components/react/input'
import { BrushCleaning } from 'lucide-react'
import { useMemo, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTasks } from './store'

export default function TaskAdd(): ReactElement {
  const tasks = useTasks(state => state.tasks)
  const addTask = useTasks(state => state.add)
  const clearTasks = useTasks(state => state.clear)

  const [value, setValue] = useState<string>('')

  const uncheckedTasks = useMemo(() => {
    return Object.values(tasks).filter(task => !task.checked)
  }, [tasks])

  const onAddTask = () => {
    addTask(value)
    setValue('')
  }

  return (
    <>
      <div className="flex gap-16 items-center">
        <Input
          placeholder="What do you need to do today?"
          className={twJoin(
            'py-8 px-4 w-full border-b-2 border-gray-7',
            'focus-visible:outline-none focus-visible:border-accent-8',
          )}
          value={value}
          onValueChange={setValue}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onAddTask()
            }
          }}
        />
        <button
          type="button"
          onClick={clearTasks}
          className="rounded-6 bg-gray-3 p-8 cursor-pointer w-36 h-36"
        >
          <BrushCleaning size={20} />
        </button>
      </div>
      {uncheckedTasks.length > 10 && (
        <div className="text-accent-11 p-16 bg-accent-3 rounded-4">
          ✨ You're on a roll! You've got 10+ tasks going. How about finishing one or two before adding more? You've got this! 💪
        </div>
      )}
    </>
  )
}
