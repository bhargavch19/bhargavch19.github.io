import { useCallback, useEffect, useState } from 'react'

export function useHashTab<T extends string>(
  tabs: readonly T[],
  fallback: T,
): [T, (next: T) => void] {
  const read = useCallback((): T => {
    if (typeof window === 'undefined') return fallback
    const raw = window.location.hash.replace(/^#/, '') as T
    return tabs.includes(raw) ? raw : fallback
  }, [tabs, fallback])

  const [active, setActive] = useState<T>(read)

  useEffect(() => {
    const onHashChange = () => setActive(read())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [read])

  const select = useCallback((next: T) => {
    if (typeof window === 'undefined') return
    if (window.location.hash.replace(/^#/, '') === next) {
      setActive(next)
      return
    }
    window.history.replaceState(null, '', `#${next}`)
    setActive(next)
  }, [])

  return [active, select]
}
