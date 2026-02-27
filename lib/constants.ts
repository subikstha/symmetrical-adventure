/**
 * ISR revalidation interval in seconds.
 * Pages re-generate in the background after this time elapses.
 * On-demand revalidation via Payload hooks can purge sooner.
 */
export const REVALIDATE_INTERVAL = 86400; // 1 day
