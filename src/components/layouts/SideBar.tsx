import IconTextButton from '@/components/ui/atoms/IconTextButton'
import Tooltip from '@/components/ui/elements/Tooltip'
import { OpenSideBar } from '@/recoil/other'
import { POSITION_TYPE } from '@/types'
import {
  ChartBarIcon,
  CheckCircleIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

type Navigation = {
  pageName: string
  path: string
  icon: ReactNode
}

const sideBarNavigations: Navigation[] = [
  {
    pageName: 'ダッシュボード',
    path: '/home',
    icon: <RectangleGroupIcon className="w-6" />,
  },
  {
    pageName: 'タスク',
    path: '/tasks',
    icon: <CheckCircleIcon className="w-6" />,
  },
  {
    pageName: 'レポート',
    path: '/reports',
    icon: <ChartBarIcon className="w-6" />,
  },
  {
    pageName: '設定',
    path: '/setting',
    icon: <Cog8ToothIcon className="w-6" />,
  },
]

type SideBarProps = {
  className?: string | undefined
}

const SideBar: FC<SideBarProps> = ({ className }) => {
  const isOpen = useRecoilValue(OpenSideBar)
  const router = useRouter()

  const isActive = (path: string) => {
    console.log(path)
    return path.split('/')[1] === String(router.route.split('/')[1])
  }

  return (
    <aside
      className={`${
        isOpen ? 'z-20 w-52' : ['hidden', 'md:block', 'md:w-13'].join(' ')
      } ${[
        'fixed',
        'left-0',
        'bottom-0 ',
        'top-12',
        'border-r-2',
        'bg-slate-500',
        'drop-shadow-2xl',
        'md:static',
      ].join(' ')} ${className}`}
    >
      <div className={`md:block ${isOpen ? '' : 'hidden'}`}>
        {sideBarNavigations.map((navigation) => (
          <>
            <Tooltip
              className={`${isOpen ? 'hidden' : 'block'}`}
              name={navigation.pageName}
              position={POSITION_TYPE.LEFT}
            >
              <Link
                as={navigation.path}
                href={navigation.path}
                key={navigation.pageName}
              >
                <div className="w-full">
                  <IconTextButton
                    className={`${
                      isActive(navigation.path) ? 'bg-slate-600' : ''
                    } pl-2`}
                    icon={navigation.icon}
                  >
                    <div className={`${isOpen ? 'block' : 'hidden'}`}>
                      {navigation.pageName}
                    </div>
                  </IconTextButton>
                  <hr />
                </div>
              </Link>
            </Tooltip>
          </>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
