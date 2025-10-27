import type { ReactElement } from 'react'
import { Checkbox } from '@base-ui-components/react'
import { Check } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

export function TodoItem(props: { name: string, value: string }): ReactElement {
  const { name, value } = props
  return (
    <label className="flex items-center gap-8">
      <Checkbox.Root
        name={name}
        value={value}
        className={twJoin(
          'flex items-center justify-center rounded-4 size-24',
          'data-checked:bg-accent-3 data-unchecked:border data-unchecked:border-gray-9',
        )}
      >
        <Checkbox.Indicator className="text-accent-11 data-unchecked:hidden">
          <Check size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {name}
    </label>
  )
}
