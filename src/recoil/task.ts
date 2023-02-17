import { Task } from '@/types'
import { atom, selector } from 'recoil'

export const TaskAtom = atom<Task | null>({
  key: 'task',
  default: null,
})

export const TasksAtom = atom<Task[] | []>({
  key: 'tasks',
  default: [],
})

export const TasksFiltersAtom = atom<[]>({
  key: 'tasks.filters',
  default: [],
})

export const CurrentTaskAtom = atom<Task | null>({
  key: 'current.task',
  default: {
    id: '',
    create_at: '',
    updated_at: '',
    title: '',
    content: '',
    user_id: '',
    manage_user_id: '',
  },
})

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
