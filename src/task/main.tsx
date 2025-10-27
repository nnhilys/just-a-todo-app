import type { Task } from './type'
import { CheckboxGroup } from '@base-ui-components/react/checkbox-group'
import { useState } from 'react'
import TaskAdd from './add'
import { TaskItem } from './item'

export function TaskMain() {
  const [items, setItems] = useState<Task[]>([])

  return (
    <div className="flex flex-col gap-16 min-w-264 w-max">
      <h1 className="text-3xl text-accent-11 font-medium">
        Just a to do app
      </h1>
      <TaskAdd
        onAdd={(task) => {
          const id = crypto.randomUUID()
          setItems(list => [...list, { id, task, checked: false }])
        }}
      />
      <CheckboxGroup
        aria-labelledby="Task-list"
        className="flex flex-col items-start gap-16"
        value={items.filter(item => item.checked).map(item => item.task)}
        onValueChange={(value) => {
          setItems((list) => {
            return list.map(item => ({ ...item, checked: value.includes(item.task) }))
          })
        }}
        allValues={items.map(item => item.task)}
      >
        {items.map(({ id, task }) => {
          return <TaskItem key={id} name={task} value={task} />
        })}
      </CheckboxGroup>
    </div>
  )
}
