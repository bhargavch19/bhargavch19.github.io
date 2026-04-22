import { useEffect, useRef } from 'react'

/**
 * Radial-gradient spotlight that tracks the mouse inside its parent.
 * Parent should be `position: relative`. Spotlight is behind content.
 * No-op on touch-only devices and under prefers-reduced-motion.
 */
export function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const parent = el.parentElement
    if (!parent) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
        el.style.opacity = '1'
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.opacity = '0'
    }

    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(360px circle at var(--mx, -1000px) var(--my, -1000px), rgba(99, 139, 255, 0.18), transparent 70%)',
      }}
    />
  )
}
