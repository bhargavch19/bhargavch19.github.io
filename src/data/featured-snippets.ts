export interface FeaturedSpec {
  id: string
  headline: string
  blurb: string
}

/**
 * The 12 snippets surfaced in the top gallery. IDs must match
 * snippets.generated.ts. Reorder freely — display order follows this array.
 */
export const featured: FeaturedSpec[] = [
  {
    id: 'material-table-detail-panel',
    headline: 'Material-Table custom detail panel',
    blurb: 'Show / hide row-level detail panels on a Material-Table instance from outside code — useful for tied row state.',
  },
  {
    id: 'ng-sort-search-combo',
    headline: 'Table: sort + search + paginate, together',
    blurb: 'Angular pipeline that composes sort, search-filter, and pagination cleanly instead of fighting three observables.',
  },
  {
    id: 'react-autocomplete',
    headline: 'Autocomplete with keyboard navigation',
    blurb: 'React search widget with full arrow-key / enter / escape support — the UX polish that separates shipped from prototype.',
  },
  {
    id: 'ng-forkjoin',
    headline: 'Multiple API calls with forkJoin',
    blurb: 'Fan-out concurrent API requests in Angular while preserving order and handling partial failures gracefully.',
  },
  {
    id: 'ng-auth-guard',
    headline: 'Route protection with AuthGuard',
    blurb: 'Production-ready Angular AuthGuard pattern wired for lazy-loaded modules.',
  },
  {
    id: 'react-http-interceptor',
    headline: 'Axios HTTP interceptors in React',
    blurb: 'Request / response interceptors for auth headers, retries, and centralized error handling.',
  },
  {
    id: 'debounce-live-search',
    headline: 'Debounce helper for live search',
    blurb: 'Tiny, dependency-free debounce for typing-driven search — the one you actually want.',
  },
  {
    id: 'ng-custom-date-pipe',
    headline: 'Custom date pipe for a global format',
    blurb: 'One pipe imported once — consistent date formatting across every template in the app.',
  },
  {
    id: 'ng-email-field-filter',
    headline: 'Track new vs updated email values',
    blurb: 'Dirty-state diffing for form fields — lets you send only what changed to the backend.',
  },
  {
    id: 'custom-checkbox-css',
    headline: 'Custom checkbox in pure CSS',
    blurb: 'Accessible, styleable checkbox with no JS — replaces the default browser control cleanly.',
  },
  {
    id: 'deep-copy',
    headline: 'Deep-copy any object or array',
    blurb: 'A reliable recursive clone for cases where `structuredClone` isn\'t available or appropriate.',
  },
  {
    id: 'ng-reactive-form-validation',
    headline: 'Reactive form validation',
    blurb: 'Typed validation with reusable validators and inline error messaging — the pattern I reach for by default.',
  },
]
