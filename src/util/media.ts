import { useCallback, useMemo, useSyncExternalStore } from 'react'

type Callback = () => void

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
 */
export function useMedia(query: string): boolean {
  const media = useMemo(() => {
    return window.matchMedia(query)
  }, [query])

  const getSnapshot = useCallback((): boolean => {
    return media.matches
  }, [media])

  const subscribe = useCallback((callback: Callback): Callback => {
    media.addEventListener('change', callback)
    return () => media.removeEventListener('change', callback)
  }, [media])

  const matches = useSyncExternalStore(subscribe, getSnapshot)
  return matches
}
