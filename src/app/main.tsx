import type { ReactElement } from 'react'
import ThemeToggle from '../theme/toggle'
import { useTheme } from '../theme/use'
import { AppToolList } from './list'

export function AppMain(): ReactElement {
  useTheme()

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-end p-32">
        <ThemeToggle />
      </div>
      <div className="flex w-full justify-center">
        <AppToolList />
      </div>
    </div>
  )
}
