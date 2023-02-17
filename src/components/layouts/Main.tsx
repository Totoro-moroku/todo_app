import { Header } from '@/components/layouts/Header'
import { SideBar } from '@/components/layouts/SideBar'
import { FC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="relative">
      <Header className="fixed top-0 z-10" />
      <div className="fixed top-12 flex w-screen">
        <SideBar className="fixed grow-0" />
        <main className="grow">{children}</main>
      </div>
    </main>
  )
}
