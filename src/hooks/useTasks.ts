import { LineLoadingAtom } from '@/recoil/other'
import { TasksAtom, TasksPageLimtAtom } from '@/recoil/task/atom'
import { FilteredTasksSelector } from '@/recoil/task/selector'
import { supabase } from '@/utils/supabase'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const database = { from: 'tasks' }

const useTasks = () => {
  const setTasks = useSetRecoilState(TasksAtom)
  const pageLimit = useRecoilValue(TasksPageLimtAtom)
  const tasks = useRecoilValue(FilteredTasksSelector)
  const setLineLoding = useSetRecoilState(LineLoadingAtom)

  useEffect(() => {
    if (tasks.length > 0) return
    try {
      setLineLoding(true)
      getTasks()
    } finally {
      setTimeout(() => {
        setLineLoding(false)
      }, 1500)
    }
    return
  }, [])

  const getTasks = async () => {
    const { data, error, status, statusText } = await supabase
      .from(database.from)
      .select('*')
      .limit(pageLimit)

    if (error && status === 406) {
      throw new Error(error.message)
    }

    // @ts-ignore
    if (data?.length > 0) {
      console.log(data)
      // @ts-ignore
      setTasks(data)
    }
  }

  return {
    tasks,
  }
}

export default useTasks