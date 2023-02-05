import { IconButton } from '@/components/ui/atoms/IconButton'
import { IconTextButton } from '@/components/ui/atoms/IconTextButton'
import { OpenSideBar } from '@/recoil/other'
import {
  Bars3Icon,
  ChartBarIcon,
  CheckCircleIcon,
  ChevronDoubleRightIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { useRecoilState } from 'recoil'

type Navigation = {
  pageName: string
  path: string
  icon: ReactNode
}

const sideBarNavigations: Navigation[] = [
  {
    pageName: 'ダッシュボード',
    path: '/home',
    icon: <RectangleGroupIcon className="w-7" />,
  },
  {
    pageName: 'タスク',
    path: '/task',
    icon: <CheckCircleIcon className="w-7" />,
  },
  {
    pageName: 'レポート',
    path: '/report',
    icon: <ChartBarIcon className="w-7" />,
  },
  {
    pageName: '設定',
    path: '/setting',
    icon: <Cog8ToothIcon className="w-7" />,
  },
]

type SideBarProps = {
  className?: string | undefined
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [isOpen, setIsOpne] = useRecoilState(OpenSideBar)
  const router = useRouter()

  const isActive = (path: string) => {
    return path === String(router.route)
  }

  return (
    <aside
      className={`${
        isOpen ? 'w-52' : 'w-0 lg:w-14'
      } fixed top-14 z-10 min-h-screen bg-slate-500 drop-shadow-2xl lg:static  ${className}`}
    >
      <div className="relative">
        <div className={`absolute -top-14 z-20 px-1 py-0.5`}>
          <IconButton className={'group'} onClick={() => setIsOpne(!isOpen)}>
            <div className="">
              <Bars3Icon className={`visible w-7 group-hover:hidden`} />
              <ChevronDoubleRightIcon
                className={`${
                  isOpen ? 'rotate-180' : ''
                } hidden w-7 group-hover:inline-block`}
              />
            </div>
          </IconButton>
        </div>
      </div>
      <div className={`lg:block ${isOpen ? '' : 'hidden'}`}>
        {sideBarNavigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.pageName}>
            <div className="ml-0.5 p-1">
              <IconTextButton
                className={`rounded-md ${
                  isActive(navigation.path) ? 'bg-slate-400' : ''
                }`}
                icon={navigation.icon}
              >
                <div className={`${isOpen ? 'block' : 'hidden'}`}>
                  {navigation.pageName}
                </div>
              </IconTextButton>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
