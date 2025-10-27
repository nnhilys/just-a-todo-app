import type { RefObject } from 'react'
import { useCallback, useRef, useSyncExternalStore } from 'react'

type Callback = () => void

interface Result<ElementType extends Element, Value> {
  value: Value
  ref: RefObject<ElementType | null>
}

export function useSyncFromEvent<ElementType extends Element, Value>(params: {
  event: string
  get: (element: ElementType | null) => Value
}): Result<ElementType, Value> {
  const { event, get } = params

  const ref = useRef<ElementType>(null)

  const subscribe = useCallback((callback: Callback): Callback => {
    const element = ref.current
    if (element === null)
      throw new Error('Missing element')
    element.addEventListener(event, callback)
    return () => {
      element.removeEventListener(event, callback)
    }
  }, [event])

  const getSnapshot = useCallback(() => {
    return get(ref.current)
  }, [get])

  const value = useSyncExternalStore<Value>(subscribe, getSnapshot)
  return { value, ref }
}
