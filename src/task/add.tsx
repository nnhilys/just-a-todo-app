import type { ReactElement } from 'react'
import { Input } from '@base-ui-components/react/input'
import { useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTasks } from './store'

export default function TaskAdd(): ReactElement {
  const addTask = useTasks(state => state.add)
  const [value, setValue] = useState<string>('')

  const onAddTask = () => {
    addTask(value)
    setValue('')
  }

  return (
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
  )
}
