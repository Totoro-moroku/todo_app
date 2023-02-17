import { Layout } from '@/components/layouts/Layout'
import { Main } from '@/components/layouts/Main'
import SideMenu from '@/components/ui/elements/SideMenu'
import { useTasks } from '@/hooks/useTasks'
import { LineLoadingAtom } from '@/recoil/other'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

const Task: FC = () => {
  const { tasks } = useTasks()

  const lineloadin = useRecoilValue(LineLoadingAtom)

  return (
    <Layout title="task">
      <Main>
        <div className="flex">
          <SideMenu className="hidden flex-none md:block">
            <main></main>
          </SideMenu>
          <div className="flex w-full grow flex-col">
            <div className="h-6 flex-none border-b bg-slate-50">なんか</div>
            <div className="h-14 flex-none border-b bg-slate-50">
              <div>フィルター</div>
            </div>
            <main className="grow">
              <div className="flex h-[733px] flex-col">
                <div className="h-10 flex-none border-b bg-slate-100">
                  <div>カラム名</div>
                </div>
                <div className="max-h h-[653px] border-b">
                  <div className="box-content h-full overflow-x-auto overflow-y-scroll">
                    {lineloadin ? (
                      <>データ取得中</>
                    ) : (
                      tasks.map((task, index) => (
                        <div key={index} className={`flex h-9 flex-row`}>
                          <div className="flex-1">{task.id}</div>
                          <div className="flex-1">{task.title}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="h-10 flex-none bg-slate-600">
                  <div>フッター</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Main>
    </Layout>
  )
}

export default Task
