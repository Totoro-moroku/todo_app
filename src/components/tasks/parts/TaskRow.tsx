import TableColumn from '@/components/ui/atoms/table/TableColumn'
import TableRow from '@/components/ui/atoms/table/TableRow'
import useTask from '@/hooks/useTask'
import { Task } from '@/types'

type TaskRowProps = {
  key: string | undefined
  task: Task
}

function TaskRow({ key, task }: TaskRowProps) {
  const { onOpen, setTask } = useTask()

  function handeleClick() {
    onOpen(task)
  }

  return (
    <TableRow key={key} className={`flex min-h-[32px] bg-slate-100`}>
      <TableColumn
        className={`sticky left-0 w-12 bg-slate-100 group-hover:bg-slate-200`}
      >
        <></>
      </TableColumn>
      <TableColumn
        className={`group sticky left-12 w-52 bg-slate-100 group-hover:bg-slate-200`}
        fiexed={true}
      >
        <div>{task.title}</div>
        <div
          className="absolute top-0 right-1 z-10 hidden rounded border bg-slate-500 px-2 py-1 text-white hover:cursor-pointer group-hover:block"
          onClick={handeleClick}
        >
          開く
        </div>
      </TableColumn>
      <TableColumn className={`w-52 bg-slate-100 group-hover:bg-slate-200`}>
        {task.user_id}
      </TableColumn>
      <TableColumn className={`w-52 bg-slate-100 group-hover:bg-slate-200`}>
        {1}
      </TableColumn>
      <TableColumn className={`w-52 bg-slate-100 group-hover:bg-slate-200`}>
        {1}
      </TableColumn>
    </TableRow>
  )
}

export default TaskRow
