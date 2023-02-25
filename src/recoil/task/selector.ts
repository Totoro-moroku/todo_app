import { CurrentTaskAtom, TasksAtom } from '@/recoil/task/atom'
import { Task } from '@/types'
import { selector } from 'recoil'

export const FilteredTasksSelector = selector<Task[] | []>({
  key: 'tasks.filtered',
  get: ({ get }) => {
    return get(TasksAtom)
  },
})

export const selectedTaskSelector = selector<Task | null>({
  key: 'selected.task',
  get: ({ get }) => {
    const currentTask = get(CurrentTaskAtom)
    if (!currentTask) return null
    const tasks = get(TasksAtom)
    const selectedTask = tasks.find((task) => task.id === currentTask.id)
    if (selectedTask === undefined) return null
    return selectedTask
  },
})
