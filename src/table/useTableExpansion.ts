import { useCallback, useState } from 'react'
import { childRowPrefix, removeKeysWithPrefix } from './keys'

export type TableExpansionConfig = {
  allParentIds?: readonly string[]
  allDetailIds?: readonly string[]
  /** Called after a parent row is collapsed and detail keys under it were removed. */
  onAfterParentCollapse?: (parentRowId: string) => void
}

export function useTableExpansion(config?: TableExpansionConfig) {
  const [expandedParents, setExpandedParents] = useState<Set<string>>(() => new Set())
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(() => new Set())
  const onAfterParentCollapse = config?.onAfterParentCollapse

  const toggleParent = useCallback((parentRowId: string) => {
    setExpandedParents(prev => {
      const next = new Set(prev)
      if (next.has(parentRowId)) {
        next.delete(parentRowId)
        setExpandedDetails(prevD =>
          removeKeysWithPrefix(prevD, childRowPrefix(parentRowId)),
        )
        onAfterParentCollapse?.(parentRowId)
      } else {
        next.add(parentRowId)
      }
      return next
    })
  }, [onAfterParentCollapse])

  const toggleDetail = useCallback((detailRowId: string) => {
    setExpandedDetails(prev => {
      const next = new Set(prev)
      if (next.has(detailRowId)) next.delete(detailRowId)
      else next.add(detailRowId)
      return next
    })
  }, [])

  const ensureDetailOpen = useCallback((detailRowId: string) => {
    setExpandedDetails(prev => {
      if (prev.has(detailRowId)) return prev
      const next = new Set(prev)
      next.add(detailRowId)
      return next
    })
  }, [])

  const ensureParentOpen = useCallback((parentRowId: string) => {
    setExpandedParents(prev => {
      if (prev.has(parentRowId)) return prev
      const next = new Set(prev)
      next.add(parentRowId)
      return next
    })
  }, [])

  const expandAll = useCallback(() => {
    const p = config?.allParentIds
    const d = config?.allDetailIds ?? []
    if (!p?.length) return
    setExpandedParents(new Set(p))
    setExpandedDetails(new Set(d))
  }, [config?.allParentIds, config?.allDetailIds])

  const collapseAll = useCallback(() => {
    setExpandedParents(new Set())
    setExpandedDetails(new Set())
  }, [])

  return {
    expandedParents,
    expandedDetails,
    toggleParent,
    toggleDetail,
    ensureDetailOpen,
    ensureParentOpen,
    expandAll,
    collapseAll,
  }
}
