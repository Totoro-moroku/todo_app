import Table from '@/components/ui/atoms/table/Table'
import TableColumn from '@/components/ui/atoms/table/TableColumn'
import TableRow from '@/components/ui/atoms/table/TableRow'
import TableRowsNotData from '@/components/ui/elements/table/TableRowsNotData'
import { LineLoadingAtom } from '@/recoil/other'
import { Task } from '@/types'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

type TaskListPorps = {
  tasks: Task[]
}

const TaskList: FC<TaskListPorps> = ({ tasks }) => {
  const lineloading = useRecoilValue(LineLoadingAtom)

  return (
    <Table className="w-full">
      <div className="flex flex-col">
        <TableRow className="sticky top-0 left-0 w-full bg-slate-500 text-white">
          <TableColumn
            className={`sticky left-0 w-12 bg-slate-500`}
          ></TableColumn>
          <TableColumn
            className={`sticky left-12 w-52 bg-slate-500`}
            fiexed={true}
          >
            タスク名
          </TableColumn>
          <TableColumn className={`w-52`}>カラム名</TableColumn>
          <TableColumn className={`w-52`}>1</TableColumn>
          <TableColumn className={`w-52`}>2</TableColumn>
        </TableRow>

        <div className="-z-10">
          {lineloading ? (
            <>
              <TableRowsNotData repeatCount={7} />
            </>
          ) : (
            tasks.map((task) => (
              <TableRow key={task.id} className={`flex bg-slate-100`}>
                <TableColumn
                  className={`sticky left-0 w-12 bg-slate-100 group-hover:bg-slate-200`}
                >
                  <></>
                </TableColumn>
                <TableColumn
                  className={`sticky left-12 w-52 bg-slate-100 group-hover:bg-slate-200`}
                  fiexed={true}
                >
                  {task.title}
                </TableColumn>
                <TableColumn
                  className={`w-52 bg-slate-100 group-hover:bg-slate-200`}
                >
                  {task.user_id}
                </TableColumn>
                <TableColumn
                  className={`w-52 bg-slate-100 group-hover:bg-slate-200`}
                >
                  {1}
                </TableColumn>
                <TableColumn
                  className={`w-52 bg-slate-100 group-hover:bg-slate-200`}
                >
                  {1}
                </TableColumn>
              </TableRow>
            ))
          )}
        </div>
      </div>
    </Table>
  )
}

export default TaskList
