import { TasksPageLimtAtom } from '@/recoil/task/atom'
import { FilteredTasksSelector } from '@/recoil/task/selector'
import { ALL_PAGE_LIMIT } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

function TaskFooter() {
  const [tasksPageLimt, setTaskPageLimit] = useRecoilState(TasksPageLimtAtom)
  const tasks = useRecoilValue(FilteredTasksSelector)

  return (
    <div className="flex justify-end px-4">
      <div className="w-38 px-4">
        <Listbox value={tasksPageLimt} onChange={setTaskPageLimit}>
          <div className="relative mt-1.5 w-full">
            <Listbox.Button className="relative w-full rounded-lg bg-white py-1 pl-3 pr-10 text-left text-sm shadow-md hover:cursor-pointer">
              <Transition
                as={Fragment}
                leave="transition ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute left-0 bottom-8 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {ALL_PAGE_LIMIT.map((limit, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative select-none  px-3 py-1 hover:cursor-pointer ${
                          active ? ' bg-slate-400  text-white' : 'text-gray-900'
                        }`
                      }
                      value={limit}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {limit} 行
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              <span>{tasksPageLimt} 行</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
        </Listbox>
      </div>
      <div className="px-1 py-2.5 text-sm text-white">
        <span>{tasks.length} tasks</span>
      </div>
    </div>
  )
}

export default TaskFooter
