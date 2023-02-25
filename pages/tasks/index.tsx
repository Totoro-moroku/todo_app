import Layout from '@/components/layouts/Layout'
import Main from '@/components/layouts/Main'
import TaskView from '@/components/tasks/TaskView'
import SideMenu from '@/components/ui/elements/SideMenu'
import useTasks from '@/hooks/useTasks'
import { LineLoadingAtom } from '@/recoil/other'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

const Task: FC = () => {
  const { tasks } = useTasks()

  const lineloadin = useRecoilValue(LineLoadingAtom)

  return (
    <Layout title="task">
      <Main className="flex w-full">
        <SideMenu className="w-0 flex-none md:w-52">
          <main></main>
        </SideMenu>
        <main className="flex w-full flex-col">
          <TaskView />
        </main>
      </Main>
    </Layout>
  )
}

export default Task
