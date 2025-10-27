import type { ReactElement } from 'react'
import { CheckboxGroup } from '@base-ui-components/react/checkbox-group'
import { twJoin } from 'tailwind-merge'
import TaskAdd from './add'
import { TaskItem } from './item'
import { useTasks } from './store'

export function TaskMain(): ReactElement {
  const tasks = useTasks(state => state.tasks)

  return (
    <div className={twJoin(
      'flex-1 min-w-320 max-w-320 ml-36',
      'flex flex-col gap-16 overflow-y-auto',
    )}
    >
      <TaskAdd />
      <div className="h-full overflow-y-auto">
        <CheckboxGroup
          aria-labelledby="task-list"
          className="flex flex-col items-start gap-16"
        >
          {Object.values(tasks)
            .sort(task => task.checked ? 1 : -1)
            .map(task => <TaskItem key={task.id} task={task} />)}
        </CheckboxGroup>
      </div>
    </div>
  )
}
