import type { CSSProperties, ReactNode, Ref } from 'react'

type TableScrollRegionProps = {
  scrollRef?: Ref<HTMLDivElement>
  onScroll?: () => void
  horizontalPadding?: number
  minWidth?: number
  innerPaddingTop?: number
  innerPaddingBottom?: number
  innerPaddingX?: number
  hideScrollbar?: boolean
  overflowY?: 'hidden' | 'visible' | 'auto'
  children: ReactNode
  style?: CSSProperties
}

export function TableScrollRegion({
  scrollRef,
  onScroll,
  horizontalPadding = 0,
  minWidth,
  innerPaddingTop,
  innerPaddingBottom,
  innerPaddingX = 0,
  hideScrollbar,
  overflowY = 'auto',
  children,
  style,
}: TableScrollRegionProps) {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className={hideScrollbar ? 'hide-scrollbar' : undefined}
      style={{
        overflowX: 'auto',
        overflowY,
        padding: horizontalPadding ? `0 ${horizontalPadding}px` : undefined,
        ...style,
      }}
    >
      <div
        style={{
          minWidth,
          paddingTop: innerPaddingTop,
          paddingBottom: innerPaddingBottom,
          paddingLeft: innerPaddingX,
          paddingRight: innerPaddingX,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </div>
  )
}
