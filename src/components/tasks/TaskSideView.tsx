import useTask from '@/hooks/useTask'
import TaskForm from './parts/TaskForm'

function TaskSideView() {
  const { onClose } = useTask()

  return (
    <div className="flex h-screen w-7/12 flex-col border-l-4 bg-slate-100">
      <div className="flex justify-start border-b p-1">
        <button className="" onClick={onClose}>
          閉じる
        </button>
      </div>
      <div>
        <TaskForm />
      </div>
    </div>
  )
}

export default TaskSideView
