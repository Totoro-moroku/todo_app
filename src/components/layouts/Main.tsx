import Header from '@/components/layouts/Header'
import SideBar from '@/components/layouts/SideBar'
import { FC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
  className?: string
}

const Main: FC<MainProps> = ({ children, className }) => {
  return (
    <main className="fixed flex min-h-screen flex-col">
      <Header className="z-10 w-screen flex-none" />
      <div className="flex flex-1 items-stretch">
        <SideBar className="flex-none" />
        <main className={`flex-1 gap-y-0 ${className}`}>{children}</main>
      </div>
    </main>
  )
}

export default Main
