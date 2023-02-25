import { FC, ReactNode } from 'react'

type SideMenuPorps = {
  children: ReactNode
  className?: string
}

const SideMenu: FC<SideMenuPorps> = ({ className, children }) => {
  return <div className={`${className} bg-slate-0 border-r-2`}>{children}</div>
}

export default SideMenu
