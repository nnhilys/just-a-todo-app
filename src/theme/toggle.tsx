import { Toggle } from '@base-ui-components/react/toggle'
import { Moon, Sun } from 'lucide-react'
import { twJoin } from 'tailwind-merge'
import { usePref } from './store'

export default function ThemeToggle() {
  const theme = usePref(state => state.theme)

  return (
    <Toggle
      aria-label="theme"
      className={twJoin(
        'p-4 select-none rounded-4 text-gray-12 hover:bg-gray-4',
        'focus-visible:outline-none focus-visible:bg-gray-4',
      )}
      pressed={theme === 'light'}
      onPressedChange={(pressed) => {
        usePref.setState({ theme: pressed ? 'light' : 'dark' })
      }}
      render={(props, state) => {
        if (state.pressed) {
          return (
            <button type="button" {...props}>
              <Sun size={24} />
            </button>
          )
        }
        return (
          <button type="button" {...props}>
            <Moon size={24} />
          </button>
        )
      }}
    />
  )
}
