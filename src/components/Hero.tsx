import { useState } from 'react'
import { profile } from '../data/profile'

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 grid-backdrop" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Senior Frontend Developer · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-[color:var(--color-accent)]">{profile.name.split(' ')[0]}</span>.
            <br />
            I build scalable web apps <span className="text-slate-400">at enterprise scale.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumeHref}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Download resume
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="mono text-xs uppercase tracking-wider text-slate-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-100">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 md:ml-auto md:h-64 md:w-64">
          <div
            className="absolute inset-0 -z-10 rounded-full bg-[color:var(--color-accent)] opacity-20 blur-3xl"
            aria-hidden="true"
          />
          {photoFailed ? (
            <div className="flex h-full w-full items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-5xl font-semibold text-slate-100">
              BC
            </div>
          ) : (
            <img
              src={profile.photoHref}
              alt={profile.name}
              className="h-full w-full rounded-full border border-slate-800 object-cover"
              onError={() => setPhotoFailed(true)}
            />
          )}
        </div>
      </div>
    </section>
  )
}
