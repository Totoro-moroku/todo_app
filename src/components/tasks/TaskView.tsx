import TaskFooter from '@/components/tasks/TaskFooter'
import TaskList from '@/components/tasks/TaskList'
import TaskSideView from '@/components/tasks/TaskSideView'
import IconTextButton from '@/components/ui/atoms/IconTextButton'
import useTask from '@/hooks/useTask'
import useTasks from '@/hooks/useTasks'
import {
  ArrowPathIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

function TaskView({}) {
  const [openFilter, setOpenFilter] = useState(false)
  const { tasks } = useTasks()
  const { task, onOpen, isOpenForm } = useTask()

  const handeleClick = () => {
    onOpen()
  }

  return (
    <>
      <div className={`flex w-full flex-col ${task ? '' : 'w-full grow'}`}>
        <div
          className={`row-span-1 border-b bg-slate-500 text-white ${
            openFilter ? ' h-40' : 'h-14'
          }`}
        >
          <button
            onClick={() => {
              setOpenFilter(!openFilter)
            }}
          >
            開く
          </button>
        </div>
        <div className="flex h-8 grow-0 space-x-1 border-b bg-slate-500">
          <IconTextButton
            className="m-1 rounded py-0 pl-1 pr-2 text-sm"
            icon={<ArrowPathIcon className="w-4" />}
          >
            リフレッシュ
          </IconTextButton>
          <IconTextButton
            className="m-1 rounded py-0 pl-1 pr-2 text-sm"
            icon={<PlusCircleIcon className="w-4" />}
            onClick={handeleClick}
          >
            追加
          </IconTextButton>
          <IconTextButton
            className="m-1 rounded py-0 pl-1 pr-2 text-sm"
            icon={<TrashIcon className="w-4" />}
          >
            削除
          </IconTextButton>
        </div>
        <div
          className={`grid ${
            openFilter ? 'h-[calc(100vh-280px)]' : 'h-[calc(100vh-176px)]'
          } grow-0 bg-slate-100`}
        >
          <TaskList tasks={tasks} />
        </div>
        <div className="h-10 grow-0 bg-slate-500">
          <TaskFooter />
        </div>
      </div>
      {isOpenForm ? <TaskSideView /> : ''}
    </>
  )
}

export default TaskView
