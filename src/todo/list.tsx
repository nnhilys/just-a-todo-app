import { CheckboxGroup } from '@base-ui-components/react/checkbox-group'
import { useState } from 'react'
import { TodoItem } from './item'

export function TodoList() {
  const [value, setValue] = useState<string[]>([])

  const items = [
    { name: 'Buy groceries', value: 'buy-groceries' },
    { name: 'Finish project report', value: 'finish-project-report' },
    { name: 'Call dentist for appointment', value: 'call-dentist' },
  ]

  return (
    <CheckboxGroup
      aria-labelledby="todo-list"
      className="flex flex-col items-start gap-16 text-gray-11"
      value={value}
      onValueChange={setValue}
      allValues={items.map(item => item.value)}
    >
      {items.map(({ name, value }) => {
        return <TodoItem key={value} name={name} value={value} />
      })}
    </CheckboxGroup>
  )
}
