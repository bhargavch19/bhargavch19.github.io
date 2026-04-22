import { useEffect, useRef } from 'react'

/**
 * Canvas-based flowing waves. Four stacked sine layers with different
 * amplitudes, frequencies, phase velocities, and translucent gradient fills.
 * Reads CSS vars `--color-accent` and `--color-accent-2` so it stays on
 * palette when the theme shifts.
 *
 * Respects prefers-reduced-motion (renders one static frame, then stops).
 */
interface Layer {
  amplitude: number
  wavelength: number
  speed: number
  phase: number
  yOffset: number
  color: [string, string]
  fillOpacity: number
}

export function WaveBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rootStyle = getComputedStyle(document.documentElement)
    const accent = rootStyle.getPropertyValue('--color-accent').trim() || '#6b8cff'
    const accent2 = rootStyle.getPropertyValue('--color-accent-2').trim() || '#7fd3f3'

    const layers: Layer[] = [
      { amplitude: 26, wavelength: 420, speed: 0.0016, phase: 0, yOffset: 0.78, color: [accent, accent2], fillOpacity: 0.08 },
      { amplitude: 20, wavelength: 300, speed: -0.0022, phase: Math.PI / 3, yOffset: 0.86, color: [accent2, accent], fillOpacity: 0.09 },
      { amplitude: 14, wavelength: 210, speed: 0.003, phase: Math.PI, yOffset: 0.92, color: [accent, accent2], fillOpacity: 0.1 },
      { amplitude: 9, wavelength: 150, speed: -0.004, phase: Math.PI / 2, yOffset: 0.97, color: [accent2, accent], fillOpacity: 0.14 },
    ]

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawLayer = (layer: Layer, time: number) => {
      const baseY = height * layer.yOffset
      ctx.beginPath()
      ctx.moveTo(0, height)
      for (let x = 0; x <= width; x += 2) {
        const y =
          baseY +
          Math.sin(x / layer.wavelength + time * layer.speed + layer.phase) *
            layer.amplitude
        ctx.lineTo(x, y)
      }
      ctx.lineTo(width, height)
      ctx.closePath()

      const grad = ctx.createLinearGradient(0, 0, width, 0)
      grad.addColorStop(0, `oklch(from ${layer.color[0]} l c h / ${layer.fillOpacity})`)
      grad.addColorStop(0.5, `oklch(from ${layer.color[1]} l c h / ${layer.fillOpacity + 0.08})`)
      grad.addColorStop(1, `oklch(from ${layer.color[0]} l c h / ${layer.fillOpacity})`)
      ctx.fillStyle = grad
      ctx.fill()
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let running = true

    const frame = (now: number) => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      for (const layer of layers) drawLayer(layer, now)
      if (!reduce) raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    const onResize = () => {
      resize()
      // force a repaint on resize (rAF loop will handle the next frame anyway,
      // but if reduced-motion we need to draw once)
      if (reduce) frame(performance.now())
    }
    window.addEventListener('resize', onResize)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  )
}
