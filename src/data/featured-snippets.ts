export interface FeaturedSpec {
  id: string
  headline: string
  blurb: string
}

/**
 * The 6 snippets surfaced at the top of the Snippets tab. IDs must match
 * snippets.generated.ts. Criteria: production value, complexity, visual
 * demo potential. Reorder freely — display order follows this array.
 */
export const featured: FeaturedSpec[] = [
  {
    id: 'material-table-detail-panel',
    headline: 'Material-Table custom detail panel',
    blurb: 'Show / hide row-level detail panels on a Material-Table instance from outside code — advanced row-state coordination.',
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
    id: 'ng-reactive-form-validation',
    headline: 'Reactive form validation',
    blurb: 'Typed validation with reusable validators and inline error messaging — the default pattern I reach for.',
  },
]
