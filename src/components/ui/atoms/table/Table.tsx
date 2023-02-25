import { FC, ReactNode } from 'react'

type TableProps = {
  children: ReactNode
  className?: string | undefined
}

const Table: FC<TableProps> = ({ children, className }) => {
  return (
    <div
      className={`overflow-x-scroll overflow-y-scroll overscroll-contain ${className}`}
    >
      {children}
    </div>
  )
}

export default Table
