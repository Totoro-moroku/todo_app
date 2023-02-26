import TableColumn from '@/components/ui/atoms/table/TableColumn'
import TableRow from '@/components/ui/atoms/table/TableRow'

type ColumsType = {
  name: string
  key: string
  sticky?: boolean
  className?: string
}

type TaskHeaderRowPorps = {
  colums: ColumsType[]
  fixedColumNumber?: number
}

function calLeft(index: number) {
  return `left-${12 + index * 52}`
}

function TaskHeaderRow({ colums, fixedColumNumber }: TaskHeaderRowPorps) {
  return (
    <TableRow className="sticky top-0 z-[1] h-8 w-full bg-slate-500 text-white">
      <TableColumn
        className={`sticky left-0 flex w-12 items-center justify-center bg-slate-500`}
      >
        <input
          type="checkbox"
          className="h-4 w-4 accent-slate-600 hover:transform hover:cursor-pointer"
        />
      </TableColumn>
      {colums.map((colum, index) => (
        <TableColumn
          key={colum.key}
          className={`flex w-52 items-center bg-slate-500 ${
            colum?.sticky && 'sticky'
          } ${colum?.sticky && calLeft(index)}`}
          fiexed={
            fixedColumNumber !== undefined && index + 1 === fixedColumNumber
          }
        >
          {colum.name}
        </TableColumn>
      ))}
    </TableRow>
  )
}

export default TaskHeaderRow
