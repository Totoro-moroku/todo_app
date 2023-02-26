import { PAGE_LIMIT_TYPE, Task } from '@/types'
import { persistAtom } from '@/utils/presist'
import { atom } from 'recoil'

export const TasksAtom = atom<Task[] | []>({
  key: 'tasks',
  default: [],
})

export const TasksViewParamsAtom = atom({
  key: 'tasks.view.params',
  default: [],
})

export const TasksPageLimtAtom = atom<PAGE_LIMIT_TYPE>({
  key: 'tasks.page.limit',
  default: 50,
  effects_UNSTABLE: [persistAtom],
})

export const TasksFiltersAtom = atom<[]>({
  key: 'tasks.filters',
  default: [],
})

export const TasksSelectdIdAtom = atom<[]>({
  key: 'tasks.selected.id',
  default: [],
})

export const TaskAtom = atom<Task | null>({
  key: 'task',
  default: null,
})

export const CurrentTaskAtom = atom<Task | null>({
  key: 'current.task',
  default: null,
})

export const OpenTaskForm = atom<boolean>({
  key: 'task.form.open',
  default: false,
})