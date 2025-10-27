import { CheckboxGroup } from '@base-ui-components/react/checkbox-group'
import TaskAdd from './add'
import { TaskItem } from './item'
import { useTasks } from './store'

export function TaskMain() {
  const tasks = useTasks(state => state.tasks)

  return (
    <div className="flex flex-col gap-16 min-w-264 w-max">
      <h1 className="text-3xl text-accent-11 font-medium">
        Just a to do app
      </h1>
      <TaskAdd />
      <CheckboxGroup
        aria-labelledby="task-list"
        className="flex flex-col items-start gap-16"
      >
        {Object.values(tasks).map((task) => {
          return <TaskItem key={task.id} task={task} />
        })}
      </CheckboxGroup>
    </div>
  )
}
