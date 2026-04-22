import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'
import { EASE } from '../lib/motion'
import { WaveBackdrop } from './WaveBackdrop'
import { MouseSpotlight } from './MouseSpotlight'

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section
      id="top"
      className="noise-overlay relative isolate overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10 grid-backdrop" aria-hidden="true" />
      <WaveBackdrop />
      <MouseSpotlight />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="mono mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">
            Senior Frontend Developer · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="accent-gradient">{profile.name.split(' ')[0]}</span>.
            <br />
            I build <span className="text-zinc-300">scalable web apps</span>
            <span className="text-zinc-500"> at enterprise scale.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumeHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--color-accent)]"
            >
              Download resume
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-[var(--color-accent)] hover:text-accent"
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-[var(--color-accent)] hover:text-accent"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: EASE }}
              >
                <dt className="mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-zinc-100">
                  <StatValue stat={stat} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 md:ml-auto md:h-64 md:w-64"
        >
          <div
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-25 blur-3xl"
            aria-hidden="true"
          />
          {photoFailed ? (
            <div className="flex h-full w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-5xl font-semibold text-zinc-100">
              BC
            </div>
          ) : (
            <img
              src={profile.photoHref}
              alt={profile.name}
              className="h-full w-full rounded-full border border-[var(--color-border)] object-cover"
              onError={() => setPhotoFailed(true)}
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}

function StatValue({ stat }: { stat: (typeof profile.stats)[number] }) {
  const animated = useCountUp(stat.value, 900, true)
  const suffix = 'suffix' in stat && stat.suffix ? stat.suffix : ''
  return (
    <>
      {animated}
      {suffix}
    </>
  )
}
