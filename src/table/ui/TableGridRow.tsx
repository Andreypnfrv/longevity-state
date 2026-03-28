import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

type TableGridRowProps = {
  gridTemplateColumns: string
  gap: number
  children: ReactNode
  style?: CSSProperties
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'style'>

export function TableGridRow({
  gridTemplateColumns,
  gap,
  children,
  style,
  ...rest
}: TableGridRowProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns,
        gap,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
