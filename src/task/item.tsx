import type { ReactElement } from 'react'
import type { Task } from './store'
import { Checkbox } from '@base-ui-components/react'
import { Check } from 'lucide-react'
import { twJoin } from 'tailwind-merge'
import { useTasks } from './store'

export function TaskItem(props: { task: Task }): ReactElement {
  const { task } = props

  const toggleTask = useTasks(state => state.toggle)

  return (
    <label className="flex items-center gap-8">
      <Checkbox.Root
        className={twJoin(
          'flex items-center justify-center rounded-4 size-24',
          'data-checked:bg-accent-3 data-unchecked:border data-unchecked:border-gray-9',
          'focus-visible:outline-accent-11',
        )}
        checked={task.checked}
        onCheckedChange={() => toggleTask(task.id)}
      >
        <Checkbox.Indicator className="text-accent-11 data-unchecked:hidden">
          <Check size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {task.task}
    </label>
  )
}
