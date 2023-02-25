import { FC, ReactNode } from 'react'

type TableColumnProps = {
  children?: ReactNode
  className?: string
  fiexed?: boolean
}

const TableColumn: FC<TableColumnProps> = ({
  children,
  className,
  fiexed = false,
}) => {
  return (
    <div
      className={`${[
        'flex-none',
        'truncate',
        'p-1',
        'text-sm',
        'border-b',
        'border-gray-300',
      ].join(' ')} ${className} ${
        fiexed ? ['border-r-4'].join(' ') : 'border-r'
      }`}
    >
      {children}
    </div>
  )
}

export default TableColumn
