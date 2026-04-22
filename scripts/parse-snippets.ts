import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SOURCE = resolve(__dirname, '../docs/SNIPPETS-SOURCE.md')
const OUT = resolve(__dirname, '../src/data/snippets.generated.ts')

type Language = 'angular' | 'react' | 'javascript' | 'css' | 'html'

interface SnippetSpec {
  id: string
  title: string
  startLine: number
  language?: Language
  tags?: string[]
}

interface Category {
  name: string
  key: 'html-css' | 'javascript' | 'angular' | 'react' | 'css-extra'
  snippets: SnippetSpec[]
}

/**
 * Hand-curated map of the 70+ snippets in docs/SNIPPETS-SOURCE.md.
 * Lines are 1-based. End of each snippet = start of next (or end of category).
 */
const CATEGORIES: Category[] = [
  {
    name: 'HTML & CSS',
    key: 'html-css',
    snippets: [
      { id: 'custom-checkbox-css', title: 'Custom checkbox in CSS', startLine: 3, language: 'css' },
      { id: 'custom-radio-css', title: 'Custom radio button in CSS', startLine: 53, language: 'css' },
      { id: 'arrow-css', title: 'Arrow built in CSS', startLine: 98, language: 'css' },
      { id: 'loading-icon-css', title: 'Loading icon in CSS', startLine: 116, language: 'css' },
      { id: 'spinner-loader-type-2', title: 'Spinner / loader, variant 2', startLine: 218, language: 'css' },
      { id: 'custom-scrollbar', title: 'Vertical custom scrollbar (webkit)', startLine: 270, language: 'css' },
      { id: 'triangle-shadow', title: 'Triangle with proper box-shadow', startLine: 290, language: 'css' },
      { id: 'success-checkmark-animation', title: 'Animated success checkmark (SVG + CSS)', startLine: 320, language: 'css' },
      { id: 'circular-progress-bar', title: 'Circular progress bar (SVG + CSS)', startLine: 375, language: 'css' },
      { id: 'pie-chart-css', title: 'Pie chart using CSS', startLine: 429, language: 'css' },
      { id: 'back-button-arrow', title: 'Back-button arrow in CSS', startLine: 465, language: 'css' },
      { id: 'top-header-alignment', title: 'Top header with left/center/right alignment', startLine: 487, language: 'css' },
      { id: 'animate-circle', title: 'Animated circle', startLine: 506, language: 'css' },
      { id: 'marquee-text-animation', title: 'Scroll text with <marquee>', startLine: 539, language: 'html' },
      { id: 'css-text-animation', title: 'Scroll text using CSS animation', startLine: 550, language: 'css' },
      { id: 'flex-center-alignment', title: 'Flex alignment (vertical + horizontal center)', startLine: 586, language: 'css' },
      { id: 'bottom-mask-text', title: 'Masking text on the bottom as a layer', startLine: 630, language: 'css' },
      { id: 'bootstrap4-modal-center', title: 'Bootstrap 4 modal centered vertically + horizontally', startLine: 649, language: 'css' },
      { id: 'bootstrap3-modal-center', title: 'Bootstrap 3 modal centered vertically + horizontally', startLine: 659, language: 'css' },
      { id: 'bootstrap-modal', title: 'Bootstrap modal template', startLine: 680, language: 'html' },
      { id: 'switch-toggle', title: 'Switch toggle (No/Yes)', startLine: 694, language: 'css' },
    ],
  },
  {
    name: 'JavaScript',
    key: 'javascript',
    snippets: [
      { id: 'diff-between-two-dates', title: 'Difference between two dates', startLine: 827, language: 'javascript' },
      { id: 'diff-between-two-dates-v2', title: 'Difference between two dates (robust)', startLine: 840, language: 'javascript' },
      { id: 'date-limit-between-dates', title: 'Enable only a range of dates on a date picker', startLine: 958, language: 'javascript' },
      { id: 'date-formats', title: 'Date format helpers', startLine: 965, language: 'javascript' },
      { id: 'timer-countdown-dhms', title: 'Timer countdown (months / days / hours / minutes / seconds)', startLine: 994, language: 'javascript' },
      { id: 'timer-countdown-expiry', title: 'Timer countdown from an expiry date', startLine: 1050, language: 'javascript' },
      { id: 'find-index-by-id', title: 'Find index in array of objects by id', startLine: 1089, language: 'javascript' },
      { id: 'distance-lat-long', title: 'Distance between two lat/long coordinates', startLine: 1104, language: 'javascript' },
      { id: 'querySelector-iteration', title: 'Iterate a NodeList in every browser', startLine: 1121, language: 'javascript' },
      { id: 'url-parts', title: 'Access the current URL in parts', startLine: 1129, language: 'javascript' },
      { id: 'json-formatter', title: 'JSON formatter (pretty-print on an HTML page)', startLine: 1139, language: 'javascript' },
      { id: 'random-array-item', title: 'Pick a random item from an array', startLine: 1149, language: 'javascript' },
      { id: 'horizontal-scroll-progress', title: 'Horizontal scroll progress bar', startLine: 1159, language: 'javascript' },
      { id: 'console-table', title: 'Log array data as a table with console.table()', startLine: 1215, language: 'javascript' },
      { id: 'ie-detect', title: 'Detect Internet Explorer', startLine: 1235, language: 'javascript' },
      { id: 'deep-copy', title: 'Deep-copy an object or array', startLine: 1245, language: 'javascript' },
      { id: 'ie-support-html-class', title: 'Add browser class on the <html> tag (IE support)', startLine: 1250, language: 'javascript' },
      { id: 'counter-animation', title: 'Animated number counter', startLine: 1263, language: 'javascript' },
      { id: 'percentage-of-value', title: 'Get percentage of a value', startLine: 1273, language: 'javascript' },
      { id: 'percentage-from-value', title: 'Get percentage from a value', startLine: 1280, language: 'javascript' },
      { id: 'remaining-value', title: 'Get remaining value', startLine: 1288, language: 'javascript' },
      { id: 'clone-array-with-existing', title: 'Create a new array from an existing array of objects', startLine: 1297, language: 'javascript' },
      { id: 'multi-filter-array', title: 'Multi-filter on an array', startLine: 1319, language: 'javascript' },
      { id: 'combination-key-filter', title: 'Combination-key filter from JSON', startLine: 1330, language: 'javascript' },
      { id: 'canvas-to-image', title: 'Canvas → image via toDataURL', startLine: 1361, language: 'javascript' },
      { id: 'image-to-dataurl', title: 'Image → data URL', startLine: 1389, language: 'javascript' },
      { id: 'file-size-format', title: 'Format file size (bytes → KB/MB/GB/…)', startLine: 1417, language: 'javascript' },
      { id: 'number-to-string', title: 'Convert number to string', startLine: 1428, language: 'javascript' },
      { id: 'print-random-array-item', title: 'Print a random item from an array', startLine: 1437, language: 'javascript' },
      { id: 'upload-file-base64', title: 'Upload file as base64 (img/pdf)', startLine: 1445, language: 'javascript' },
      { id: 'extract-number-from-string', title: 'Extract number from a string', startLine: 1470, language: 'javascript' },
      { id: 'close-window', title: 'Close a window via JS', startLine: 1478, language: 'javascript' },
      { id: 'pure-xhr', title: 'Pure XMLHttpRequest (vanilla AJAX)', startLine: 1490, language: 'javascript' },
      { id: 'jquery-ajax-get', title: 'GET request via jQuery AJAX', startLine: 1527, language: 'javascript' },
      { id: 'bootstrap-modal-dynamic-height', title: 'Bootstrap modal body dynamic height (jQuery)', startLine: 1585, language: 'javascript' },
      { id: 'page-visit-count', title: 'Page-view counter (visits to a page)', startLine: 1626, language: 'javascript' },
      { id: 'idle-detect', title: 'Detect user inactivity on the window', startLine: 1650, language: 'javascript' },
      { id: 'consumed-percentage', title: 'Calculate consumed percentage', startLine: 1678, language: 'javascript' },
      { id: 'remaining-percentage', title: 'Calculate remaining percentage', startLine: 1690, language: 'javascript' },
      { id: 'immutable-deep-copy', title: 'Make data immutable (deep-copy clone)', startLine: 1701, language: 'javascript' },
      { id: 'value-exists-in-array', title: 'Is a value in an array of objects?', startLine: 1731, language: 'javascript' },
      { id: 'debounce-live-search', title: 'Debounce helper for live search', startLine: 1743, language: 'javascript' },
      { id: 'no-data-timer', title: 'Set a timer to show "no data" after a delay', startLine: 1765, language: 'javascript' },
      { id: 'find-any-match', title: 'Find at least one matching record', startLine: 1806, language: 'javascript' },
      { id: 'compare-two-objects', title: 'Compare two JSON objects for equality', startLine: 1823, language: 'javascript' },
      { id: 'specific-word-check', title: 'Check if a specific word is present in a string', startLine: 1836, language: 'javascript' },
      { id: 'find-matching-value', title: 'Find matching value inside a JSON object', startLine: 1846, language: 'javascript' },
      { id: 'validation-patterns', title: 'Common validation patterns (regex)', startLine: 1859, language: 'javascript' },
      { id: 'dynamic-regex-validation', title: 'Change regex validation dynamically on dropdown change', startLine: 1890, language: 'javascript' },
      { id: 'url-validation', title: 'URL validation', startLine: 1930, language: 'javascript' },
      { id: 'price-format-commas', title: 'Price formatter (add commas as you type)', startLine: 1945, language: 'javascript' },
      { id: 'prevent-first-space', title: 'Prevent leading space on a text input', startLine: 1966, language: 'javascript' },
      { id: 'prevent-special-chars', title: 'Prevent special characters on keypress', startLine: 1976, language: 'javascript' },
      { id: 'deep-copy-array-object', title: 'Deep-copy array + existence check on array of objects', startLine: 2017, language: 'javascript' },
    ],
  },
  {
    name: 'Angular',
    key: 'angular',
    snippets: [
      { id: 'ng-model-class-interface', title: 'Typed models using classes vs interfaces', startLine: 2062, language: 'angular' },
      { id: 'ng-model-interface', title: 'Data model using an interface', startLine: 2071, language: 'angular' },
      { id: 'ng-date-pipe-formats', title: 'Date formatting with Angular DatePipe', startLine: 2081, language: 'angular' },
      { id: 'ng-custom-date-pipe', title: 'Custom date pipe for a global date format', startLine: 2090, language: 'angular' },
      { id: 'ng-post-method', title: 'POST request in Angular', startLine: 2117, language: 'angular' },
      { id: 'ng-resize-element', title: 'Resize / dynamic height based on window size', startLine: 2125, language: 'angular' },
      { id: 'ng-iframe-loader', title: 'Show a loader until an iframe finishes loading', startLine: 2141, language: 'angular' },
      { id: 'ng-textarea-char-count', title: 'Textarea remaining-character counter + max length', startLine: 2154, language: 'angular' },
      { id: 'ng-template-driven-validation', title: 'Template-driven form validation', startLine: 2164, language: 'angular' },
      { id: 'ng-confirm-password-directive', title: 'Confirm-password must-match directive', startLine: 2234, language: 'angular' },
      { id: 'ng-reactive-form-validation', title: 'Reactive form validation', startLine: 2278, language: 'angular' },
      { id: 'ng-multiple-api-order', title: 'Multiple API calls with ordered, resilient execution', startLine: 2389, language: 'angular' },
      { id: 'ng-email-field-filter', title: 'Email field: filter new vs updated values', startLine: 2449, language: 'angular' },
      { id: 'ng-data-sharing-service', title: 'Data sharing between components via BehaviorSubject service', startLine: 2508, language: 'angular' },
      { id: 'ng-parent-child-input', title: 'Parent → child data with @Input()', startLine: 2593, language: 'angular' },
      { id: 'ng-child-parent-output', title: 'Child → parent data with @Output()', startLine: 2595, language: 'angular' },
      { id: 'ng-rest-crud', title: 'RESTful CRUD (GET/POST/PUT/DELETE) in Angular', startLine: 2597, language: 'angular' },
      { id: 'ng-detect-back-forward', title: 'Detect browser back / forward clicks', startLine: 2625, language: 'angular' },
      { id: 'ng-routing', title: 'Routing setup in Angular', startLine: 2641, language: 'angular' },
      { id: 'ng-detect-route-change', title: 'Detect route / navigation changes', startLine: 2722, language: 'angular' },
      { id: 'ng-lazy-loading', title: 'Lazy loading implementation', startLine: 2764, language: 'angular' },
      { id: 'ng-auth-guard', title: 'Route protection with AuthGuard', startLine: 2820, language: 'angular' },
      { id: 'ng-child-routes', title: 'Child routes in Angular 6+', startLine: 2874, language: 'angular' },
      { id: 'ng-hash-location-strategy', title: 'Hash location strategy', startLine: 2888, language: 'angular' },
      { id: 'ng-forkjoin', title: 'Multiple API calls with forkJoin', startLine: 2896, language: 'angular' },
      { id: 'ng-sort-search-combo', title: 'Sort + search filter combined on a table', startLine: 2936, language: 'angular' },
    ],
  },
  {
    name: 'React',
    key: 'react',
    snippets: [
      { id: 'react-http-interceptor', title: 'Axios HTTP interceptors in React', startLine: 3057, language: 'react' },
      { id: 'react-autocomplete', title: 'Autocomplete / search widget with keyboard navigation', startLine: 3103, language: 'react' },
    ],
  },
  {
    name: 'Extras',
    key: 'css-extra',
    snippets: [
      { id: 'progressbar-exclamation', title: 'Progress bar with an exclamation-mark indicator', startLine: 3430, language: 'css' },
      { id: 'material-table-detail-panel', title: 'Material-Table custom detail-panel show/hide', startLine: 3496, language: 'react' },
    ],
  },
]

function stripLeadingIndent(lines: string[]): string {
  let minIndent = Infinity
  for (const line of lines) {
    if (line.trim().length === 0) continue
    const match = line.match(/^(\s*)/)
    const indent = match ? match[1].length : 0
    if (indent < minIndent) minIndent = indent
  }
  if (minIndent === Infinity || minIndent === 0) return lines.join('\n')
  return lines
    .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
    .join('\n')
}

function extractCode(raw: string[]): string {
  // Drop trailing noise lines and trim blank runs
  const cleaned = [...raw]
  while (cleaned.length > 0) {
    const last = cleaned[cleaned.length - 1]
    if (last.trim() === '' || /^(Example Result|Output|OutPut|Result|Example|Out put)\s*:?\s*$/i.test(last.trim())) {
      cleaned.pop()
    } else {
      break
    }
  }
  // Drop leading blank lines
  while (cleaned.length > 0 && cleaned[0].trim() === '') cleaned.shift()
  return stripLeadingIndent(cleaned)
}

function main() {
  const src = readFileSync(SOURCE, 'utf8')
  const lines = src.split('\n')

  interface Snippet {
    id: string
    title: string
    category: string
    categoryKey: string
    language: Language
    code: string
    lineRange: [number, number]
  }

  const out: Snippet[] = []

  CATEGORIES.forEach((cat, ci) => {
    cat.snippets.forEach((spec, si) => {
      const nextSpec = cat.snippets[si + 1]
      const nextCat = CATEGORIES[ci + 1]
      const endLine = nextSpec ? nextSpec.startLine : nextCat ? nextCat.snippets[0].startLine : lines.length + 1

      // Body is content between startLine (exclusive of title itself) and endLine (exclusive)
      const body = lines.slice(spec.startLine, endLine - 1)
      const code = extractCode(body)

      out.push({
        id: spec.id,
        title: spec.title,
        category: cat.name,
        categoryKey: cat.key,
        language: spec.language ?? 'javascript',
        code,
        lineRange: [spec.startLine, endLine - 1],
      })
    })
  })

  const header = `// AUTO-GENERATED by scripts/parse-snippets.ts
// Do not edit directly — edit docs/SNIPPETS-SOURCE.md or scripts/parse-snippets.ts, then re-run.

export type Language = 'angular' | 'react' | 'javascript' | 'css' | 'html'

export type CategoryKey = 'html-css' | 'javascript' | 'angular' | 'react' | 'css-extra'

export interface Snippet {
  id: string
  title: string
  category: string
  categoryKey: CategoryKey
  language: Language
  code: string
  lineRange: [number, number]
}
`

  const body = `\nexport const snippets: Snippet[] = ${JSON.stringify(out, null, 2)}\n`

  writeFileSync(OUT, header + body, 'utf8')
  console.log(`Wrote ${out.length} snippets → ${OUT}`)

  // Quick report: any empty snippets?
  const empty = out.filter((s) => s.code.trim().length === 0)
  if (empty.length > 0) {
    console.warn(`WARNING: ${empty.length} snippet(s) have empty code:`)
    empty.forEach((s) => console.warn(`  - ${s.id} (${s.category})`))
  }

  // Report short ones (likely parsing error)
  const short = out.filter((s) => s.code.trim().length > 0 && s.code.trim().length < 30)
  if (short.length > 0) {
    console.warn(`INFO: ${short.length} snippet(s) have very short code (check for errors):`)
    short.forEach((s) => console.warn(`  - ${s.id} (${s.code.trim().length} chars)`))
  }
}

main()
