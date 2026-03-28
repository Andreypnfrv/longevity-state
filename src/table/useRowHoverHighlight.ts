import { useCallback, useState } from 'react'
import type { CSSProperties } from 'react'

export function useRowHoverHighlight() {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null)
  return useCallback((rowId: string) => {
    const isHovered = hoveredRowId === rowId
    return {
      onMouseEnter: () => setHoveredRowId(rowId),
      onMouseLeave: () => setHoveredRowId(h => (h === rowId ? null : h)),
      isHovered,
    }
  }, [hoveredRowId])
}

export function rowHoverGridSurfaceStyle(isHovered: boolean): CSSProperties {
  return {
    ...(isHovered ? { background: 'var(--claim-row-hover-bg)' } : {}),
    borderRadius: 6,
  }
}

export function rowHoverStickyColStyle(isHovered: boolean): Pick<CSSProperties, 'background'> {
  return { background: isHovered ? 'var(--claim-row-hover-bg)' : 'var(--cell-bg)' }
}
