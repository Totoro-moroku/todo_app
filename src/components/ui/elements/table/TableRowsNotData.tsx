import { FC } from 'react'

type TableRowsNotDataProps = { repeatCount: number }

const TableRowsNotData: FC<TableRowsNotDataProps> = ({ repeatCount }) => {
  return (
    <>
      {[...Array(repeatCount)].map((count) => {
        return (
          <div
            key={`not-data-${count}`}
            className="w-full animate-pulse border-b p-2.5"
          >
            <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-300"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-300"></div>
            <div className="mb-2.5 h-2 max-w-[750px] rounded-full bg-gray-300 "></div>
            <div className="h-2 max-w-[900px] rounded-full bg-gray-300 "></div>
          </div>
        )
      })}
    </>
  )
}

export default TableRowsNotData
