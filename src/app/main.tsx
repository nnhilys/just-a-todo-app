import type { ReactElement } from 'react'
import ThemeToggle from '../theme/toggle'
import { useTheme } from '../theme/use'
import { TodoList } from '../todo/list'

export function AppMain(): ReactElement {
  useTheme()

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-end p-32">
        <ThemeToggle />
      </div>
      <div className="flex w-full justify-center">
        <div>
          <h1 className="text-3xl text-accent-11 mb-32 font-medium">
            Just a todo app
          </h1>
          <TodoList />
        </div>
      </div>
    </div>
  )
}
