import type { ReactElement } from 'react'
import { TaskMain } from '../task/main'
import { useTheme } from '../theme/use'

export function AppMain(): ReactElement {
  useTheme()

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex w-full justify-center p-32">
        <TaskMain />
      </div>
    </div>
  )
}
