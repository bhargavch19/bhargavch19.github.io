import { useEffect, useRef, useState } from 'react'
import { SectionReveal } from './SectionReveal'

interface Node {
  kind: string
  icon: string
  name: string
  svc: string
  metric: { label: string; target: number; suffix?: string }
}

const NODES: Node[] = [
  { kind: 'Source', icon: '↯', name: 'CRM · Agent Tools', svc: 'REST · Webhooks · Kafka', metric: { label: 'events/s', target: 1842 } },
  { kind: 'Queue', icon: 'Q', name: 'SQS · SNS', svc: 'DLQ · retry · fan-out', metric: { label: 'in flight', target: 216 } },
  { kind: 'Transform', icon: 'λ', name: 'Lambda · Python / Node', svc: 'validate · enrich · ETL', metric: { label: 'p95 latency', target: 84, suffix: 'ms' } },
  { kind: 'Index', icon: '◎', name: 'OpenSearch · S3', svc: 'inverted idx · cold storage', metric: { label: 'docs indexed', target: 42137 } },
  { kind: 'Surface', icon: '▤', name: 'Vue · React dashboards', svc: 'live search · A/B personalize', metric: { label: 'users active', target: 3204 } },
]

const SEG: Array<[number, number]> = [
  [120, 360],
  [360, 600],
  [600, 840],
  [840, 1080],
]
const DUR = 1400 // ms per segment
const COLORS = ['#6ee7b7', 'oklch(0.71 0.18 264)', 'oklch(0.71 0.18 264)', 'oklch(0.82 0.13 210)']

export function Pipeline() {
  const stageRef = useRef<HTMLDivElement>(null)
  const packetsRef = useRef<SVGGElement>(null)
  const [hotIdx, setHotIdx] = useState<number | null>(null)
  const [processed, setProcessed] = useState(0)

  useEffect(() => {
    const stage = stageRef.current
    const packets = packetsRef.current
    if (!stage || !packets) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let running = false
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting
      },
      { threshold: 0.2 },
    )
    io.observe(stage)

    let processedCount = 0

    const spawnPacket = (segIdx: number, delay = 0) => {
      const [x1, x2] = SEG[segIdx]
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      p.setAttribute('r', '4')
      p.setAttribute('cy', '100')
      p.setAttribute('cx', String(x1))
      p.setAttribute('fill', COLORS[segIdx])
      p.style.opacity = '0'
      packets.appendChild(p)
      const start = performance.now() + delay

      const step = (now: number) => {
        const t = (now - start) / DUR
        if (t < 0) {
          requestAnimationFrame(step)
          return
        }
        if (t >= 1) {
          const targetIdx = segIdx + 1
          setHotIdx(targetIdx)
          setTimeout(() => setHotIdx((cur) => (cur === targetIdx ? null : cur)), 380)
          p.remove()
          if (segIdx === SEG.length - 1) {
            processedCount += 1
            setProcessed(processedCount)
          }
          return
        }
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        p.setAttribute('cx', String(x1 + (x2 - x1) * eased))
        p.style.opacity = String(t < 0.1 ? t * 10 : t > 0.9 ? (1 - t) * 10 : 1)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      if (running && !reduce) {
        setHotIdx(0)
        setTimeout(() => setHotIdx((cur) => (cur === 0 ? null : cur)), 300)
        for (let i = 0; i < SEG.length; i++) spawnPacket(i, i * 320)
      }
      timer = setTimeout(tick, 1600)
    }
    tick()

    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      id="pipeline"
      aria-labelledby="pipeline-heading"
      className="relative overflow-hidden bg-[var(--color-bg)] px-6 pt-32 pb-40 sm:pt-[160px] sm:pb-[180px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="max-w-[760px]" style={{ marginBottom: 72 }}>
            <span className="section-count">
              <span className="mono text-accent" style={{ fontWeight: 500 }}>03</span>
              <span className="mono ml-2.5 uppercase text-zinc-400" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
                Data in motion
              </span>
            </span>
            <h2
              id="pipeline-heading"
              className="font-semibold text-zinc-100"
              style={{
                marginTop: 20,
                fontSize: 'clamp(40px, 5vw, 72px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}
            >
              From source to search,{' '}
              <span className="text-zinc-400">in real time.</span>
            </h2>
            <p className="mt-6 max-w-[620px] text-zinc-400" style={{ fontSize: 19, lineHeight: 1.55 }}>
              A live sketch of the ingestion pipelines I built at Capital One. Data flows left to right — watch it.
            </p>
          </div>
        </SectionReveal>

        <div
          ref={stageRef}
          className="relative grid grid-cols-2 items-stretch gap-5 lg:grid-cols-5"
        >
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wire" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.78 0.16 165)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.71 0.18 264)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.82 0.13 210)" stopOpacity="0" />
              </linearGradient>
              <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 120 100 L 360 100" stroke="url(#wire)" strokeWidth="2" fill="none" strokeDasharray="4 6" opacity="0.55" />
            <path d="M 360 100 L 600 100" stroke="url(#wire)" strokeWidth="2" fill="none" strokeDasharray="4 6" opacity="0.55" />
            <path d="M 600 100 L 840 100" stroke="url(#wire)" strokeWidth="2" fill="none" strokeDasharray="4 6" opacity="0.55" />
            <path d="M 840 100 L 1080 100" stroke="url(#wire)" strokeWidth="2" fill="none" strokeDasharray="4 6" opacity="0.55" />
            <g ref={packetsRef} filter="url(#packetGlow)" />
          </svg>

          {NODES.map((node, i) => (
            <PipelineNode key={node.name} node={node} idx={i} hot={hotIdx === i} />
          ))}
        </div>

        <SectionReveal>
          <div
            className="mono mt-10 flex flex-wrap items-center gap-6 uppercase text-zinc-400"
            style={{ fontSize: 11, letterSpacing: '0.18em' }}
          >
            <span>
              <Dot color="#6ee7b7" /> Ingest
            </span>
            <span>
              <Dot color="var(--color-accent)" /> Process
            </span>
            <span>
              <Dot color="var(--color-accent-2)" /> Serve
            </span>
            <span className="ml-auto text-zinc-400">observability · CloudWatch · Datadog · Splunk</span>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div
            className="mt-7 flex flex-wrap gap-12"
            aria-live="off"
            aria-label="Pipeline observability counters"
          >
            <Counter label="Messages processed (live demo)" value={processed.toLocaleString()} />
            <Counter label="Pipeline uptime" value="99.97%" />
            <Counter label="Data loss incidents" value="0" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function PipelineNode({ node, idx, hot }: { node: Node; idx: number; hot: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [metric, setMetric] = useState(0)
  const suffix = node.metric.suffix ?? ''

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setMetric(node.metric.target)
          return
        }
        const dur = 1800 + Math.random() * 600
        const start = performance.now()
        let raf = 0
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setMetric(Math.round(node.metric.target * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [node.metric.target])

  return (
    <div
      ref={ref}
      data-idx={idx}
      aria-label={`${node.kind}: ${node.name}. ${node.metric.label} ${node.metric.target.toLocaleString()}${suffix}.`}
      className="relative z-[2] flex min-h-[180px] flex-col justify-between rounded-[18px] border border-[var(--color-border)] p-5"
      style={{
        background: 'linear-gradient(180deg, var(--color-card) 0%, var(--color-bg-raised) 100%)',
        borderColor: hot ? 'var(--color-accent)' : undefined,
        boxShadow: hot
          ? '0 0 0 1px var(--color-accent), 0 20px 50px -24px var(--color-accent)'
          : undefined,
        transform: hot ? 'translateY(-4px)' : undefined,
        transition:
          'border-color 320ms var(--ease-out-soft), transform 400ms var(--ease-out-soft), box-shadow 400ms var(--ease-out-soft)',
      }}
    >
      <div>
        <div
          className="mono mb-3.5 grid h-9 w-9 place-items-center rounded-[10px] font-bold text-accent"
          style={{
            background: 'rgba(99,132,255,0.1)',
            border: '1px solid rgba(99,132,255,0.3)',
            fontSize: 14,
          }}
        >
          {node.icon}
        </div>
        <div className="mono uppercase text-zinc-400" style={{ fontSize: 10, letterSpacing: '0.2em' }}>
          {node.kind}
        </div>
        <div className="text-zinc-100" style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>
          {node.name}
        </div>
        <div className="mono mt-1 text-zinc-400" style={{ fontSize: 11 }}>
          {node.svc}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mono mt-3.5 flex justify-between gap-2 text-zinc-400"
        style={{ fontSize: 11, letterSpacing: '0.1em' }}
      >
        <span>{node.metric.label}</span>
        <span>
          <span className="text-zinc-100 tabular-nums" style={{ fontWeight: 500 }}>
            {metric.toLocaleString()}
          </span>
          {node.metric.suffix && <span className="ml-1 text-zinc-400">{node.metric.suffix}</span>}
        </span>
      </div>
    </div>
  )
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
      style={{ background: color, boxShadow: `0 0 10px ${color}` }}
    />
  )
}

function Counter({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="font-semibold text-zinc-100 tabular-nums"
        style={{ fontSize: 36, letterSpacing: '-0.02em' }}
      >
        {value}
      </div>
      <div
        className="mono mt-1.5 uppercase text-zinc-400"
        style={{ fontSize: 10, letterSpacing: '0.22em' }}
      >
        {label}
      </div>
    </div>
  )
}
