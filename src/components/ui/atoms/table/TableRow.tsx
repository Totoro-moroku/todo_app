import { FC, ReactNode } from 'react'

type TableRowProps = {
  children?: ReactNode
  key?: string | number | null | undefined
  className?: string
}

const TableRow: FC<TableRowProps> = ({ className, key, children }) => {
  return (
    <div
      key={key}
      className={`${['w-full', 'flex', 'h-9', 'group'].join(' ')} ${className}`}
    >
      {children}
    </div>
  )
}

export default TableRow
