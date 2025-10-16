//
// ============================================================================
// AUDIT LOGGER (Frontend-only, lightweight)
// ============================================================================
// Purpose: Provide a minimal, timestamped client-side audit-like log for actions.
// Captures: action, details, timestamp, derived user ('local-user').
// This is for UI traceability only; not a regulated audit trail.
// ============================================================================

const _events = [];

/**
// PUBLIC_INTERFACE
 * logEvent
 * Log an action to an in-memory array and print a formatted record to console.
 * @param {string} action - e.g., 'GAME_START', 'MOVE', 'INVALID_MOVE', 'RESET', 'GAME_END'
 * @param {object} [details] - Additional key/value context
 */
export function logEvent(action, details = {}) {
  const entry = {
    ts: new Date().toISOString(),
    user: 'local-user',
    action,
    details
  };
  _events.push(entry);
  // eslint-disable-next-line no-console
  console.log(`[AUDIT] ${entry.ts} | ${entry.user} | ${entry.action}`, entry.details);
}

/**
// PUBLIC_INTERFACE
 * getAuditLog
 * Retrieve a shallow copy of the current audit events.
 * @returns {Array<{ts:string,user:string,action:string,details:object}>}
 */
export function getAuditLog() {
  return _events.slice();
}
