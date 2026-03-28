/** Generic string-id helpers for nested table rows (no domain semantics). */

/** Drop entries `k` where `k.startsWith(prefix)`. Returns a new Set. */
export function removeKeysWithPrefix(set: ReadonlySet<string>, prefix: string): Set<string> {
  const n = new Set(set)
  for (const k of set) {
    if (k.startsWith(prefix)) n.delete(k)
  }
  return n
}

/** Prefix for all child row ids scoped under one expanded parent row. Default `::` matches `${parentId}::childSegment`. */
export function childRowPrefix(parentRowId: string, separator: string = '::'): string {
  return `${parentRowId}${separator}`
}
