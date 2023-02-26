import Table from '@/components/ui/atoms/table/Table'
import TableRowsNotData from '@/components/ui/elements/table/TableRowsNotData'
import { LineLoadingAtom } from '@/recoil/other'
import { Task } from '@/types'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import TaskHeaderRow from './parts/TaskHeaderRow'
import TaskRow from './parts/TaskRow'

type TaskListPorps = {
  tasks: Task[]
}

const headerColums = [
  { name: 'タスク名', key: 'task-name', sticky: true },
  { name: 'カラム名', key: 'col-name' },
  { name: '1', key: '1' },
  { name: '2', key: '2' },
  { name: '2', key: '3' },
  { name: '2', key: '4' },
  { name: '2', key: '5' },
]

const TaskList: FC<TaskListPorps> = ({ tasks }) => {
  const lineloading = useRecoilValue(LineLoadingAtom)

  return (
    <Table className="relative w-full">
      <div className="flex flex-col">
        <TaskHeaderRow colums={headerColums} fixedColumNumber={1} />
        <div className="w-full bg-slate-100">
          {lineloading ? (
            <TableRowsNotData repeatCount={7} />
          ) : (
            tasks.map((task) => <TaskRow key={task.id} task={task} />)
          )}
        </div>
      </div>
    </Table>
  )
}

export default TaskList
