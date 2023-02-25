import useTasks from '@/hooks/useTasks'
import { useState } from 'react'
import TaskFooter from './TaskFooter'
import TaskList from './TaskList'

function TaskView({}) {
  const [open, setOpen] = useState(false)
  const { tasks } = useTasks()

  return (
    <>
      <div className="h-6 grow-0 border-b bg-slate-50"></div>
      <div
        className={`row-span-1 border-b bg-slate-50 ${open ? ' h-40' : 'h-14'}`}
      >
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          開く
        </button>
      </div>
      <div
        className={`grid ${
          open ? 'h-[calc(100vh-272px)]' : 'h-[calc(100vh-168px)]'
        } grow-0`}
      >
        <TaskList tasks={tasks} />
      </div>
      <div className="h-10 grow-0 bg-slate-500">
        <TaskFooter />
      </div>
    </>
  )
}

export default TaskView
