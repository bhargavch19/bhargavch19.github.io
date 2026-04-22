import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import type { Language } from '../data/snippets.generated'

const LANG_MAP: Record<Language, string> = {
  angular: 'typescript',
  react: 'tsx',
  javascript: 'javascript',
  css: 'css',
  html: 'markup',
}

interface Props {
  code: string
  language: Language
  maxHeight?: string
}

export function CodeBlock({ code, language, maxHeight }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // noop — some browsers block clipboard without a secure context
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute right-3 top-3 z-10 rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-300 opacity-0 transition-opacity hover:text-[color:var(--color-accent)] group-hover:opacity-100"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={LANG_MAP[language] ?? 'javascript'}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} mono overflow-auto px-4 py-4 text-[13px] leading-relaxed`}
            style={{
              ...style,
              background: 'transparent',
              maxHeight: maxHeight ?? 'unset',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="mr-4 inline-block w-6 select-none text-right text-slate-600">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
