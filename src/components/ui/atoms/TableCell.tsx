import { FC, ReactNode } from 'react'

type TableCellProps = {
  children: ReactNode
}

const TableCell: FC<TableCellProps> = ({ children }) => {
  return <div>{children}</div>
}

export default TableCell
