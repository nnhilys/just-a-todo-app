import type { ReactElement } from 'react'
import { TaskMain } from '../task/main'
import { useTheme } from '../theme/use'

export function AppMain(): ReactElement {
  useTheme()

  return (
    <div className="w-screen h-screen flex flex-col items-center p-32">
      <h1 className="text-3xl text-accent-11 mb-16 font-medium">
        Just a to do app
      </h1>
      <TaskMain />
    </div>
  )
}
