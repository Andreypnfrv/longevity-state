import type { KeyboardEvent, MouseEvent } from 'react'

export type DetailRowSurfaceMode = 'matrix' | 'countryPage'

/** Whether the detail cell wrapper should stopPropagation so outer row/grid does not see clicks. */
export function detailCellStopOuterPropagation(mode: DetailRowSurfaceMode): boolean {
  return mode === 'matrix'
}

export type DetailRowRootHandlers = {
  tabIndex?: number
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void
}

/** Root grid row: country page uses whole-row activate; matrix uses per-cell only. */
export function detailRowRootHandlers(
  mode: DetailRowSurfaceMode,
  detailRowId: string,
  toggleDetail: (id: string) => void,
): DetailRowRootHandlers {
  if (mode !== 'countryPage') return {}
  return {
    tabIndex: 0,
    onClick: () => toggleDetail(detailRowId),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggleDetail(detailRowId)
      }
    },
  }
}
