import { FC, ReactNode } from 'react'

type TableColumnProps = {
  children?: ReactNode
  className?: string
  key?: string
  fiexed?: boolean
}

const TableColumn: FC<TableColumnProps> = ({
  children,
  className,
  key,
  fiexed = false,
}) => {
  return (
    <div
      className={`${[
        'flex-none',
        'p-1',
        'text-sm',
        'border-b',
        'border-gray-300',
      ].join(' ')} ${className} ${
        fiexed ? ['border-r-4'].join(' ') : 'border-r'
      }`}
      key={key}
    >
      {children}
    </div>
  )
}

export default TableColumn
