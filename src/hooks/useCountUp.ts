import { useEffect, useState } from 'react'

/**
 * Animates an integer from 0 → target over `duration` ms using easeOutCubic.
 * Respects prefers-reduced-motion by snapping to the target immediately.
 */
export function useCountUp(target: number, duration = 900, enabled = true): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setValue(target)
      return
    }
    if (typeof window === 'undefined') {
      setValue(target)
      return
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, enabled])

  return value
}
