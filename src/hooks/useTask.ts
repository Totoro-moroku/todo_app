import { CurrentTaskAtom, OpenTaskForm } from '@/recoil/task/atom'
import { UserAtom } from '@/recoil/user'
import { Task } from '@/types'
import { supabase } from '@/utils/supabase'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { databaseTask } from './useTasks'

const useTask = () => {
  const [currentTask, setCurrentTask] = useRecoilState(CurrentTaskAtom)
  const resetCurrentTask = useResetRecoilState(CurrentTaskAtom)
  const [openForm, setOpenForm] = useRecoilState(OpenTaskForm)

  const user = useRecoilValue(UserAtom)

  const insertTask = async () => {
    console.log(currentTask)

    const { data, error, status } = await supabase
      .from(databaseTask.from)
      .insert({
        title: currentTask?.title,
        user_id: user?.id,
        created_at: new Date(),
      })

    if (error) {
      console.error(error)
    }

    console.log(data)
  }

  const onOpen = (task?: Task) => {
    resetCurrentTask()
    setOpenForm(true)
    if (task) {
      setCurrentTask(task)
    }
  }

  const onClose = () => {
    resetCurrentTask()
    setOpenForm(false)
  }

  const setTaskValue = (e: any, key: 'title') => {
    // @ts-ignore
    setCurrentTask({
      ...currentTask,
      [key]: e.target.value,
    })
  }

  return {
    task: currentTask,
    isOpenForm: openForm,
    setTask: setCurrentTask,
    setTaskValue,
    insertTask,
    onOpen,
    onClose,
  }
}

export default useTask
