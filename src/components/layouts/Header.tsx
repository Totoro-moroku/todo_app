import { IconButton } from '@/components/ui/atoms/IconButton'
import { IconButtonMenu } from '@/components/ui/elements/IconButtonMenu'
import { LogoutModal } from '@/components/ui/parts/LogoutModal'
import { NoticeItem, NoticeTitle } from '@/components/ui/parts/NoticeIconMenu'
import {
  AccountChangeItem,
  EndItem,
  LogoutItem,
  SettingItem,
  UserTitle,
} from '@/components/ui/parts/UserIconMenu'
import { useAuth } from '@/hooks/useAuth'
import { OpenLogoutAtom, OpenSideBar } from '@/recoil/other'
import {
  Bars3Icon,
  BellIcon,
  ChevronDoubleRightIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

const NoticeItems = [NoticeItem]

type HeaderProps = {
  className?: string | undefined
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { user } = useAuth()
  const setOpen = useSetRecoilState(OpenLogoutAtom)
  const [isOpen, setIsOpne] = useRecoilState(OpenSideBar)

  return (
    <nav
      className={`${className} ${[
        'right-0',
        'top-0',
        'left-0',
        'border-b-2',
        'bg-slate-400',
      ].join(' ')}`}
    >
      <div className="flex h-14 pl-2 pr-4">
        <div className="w-12">
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
        <div className="grow"></div>
        <div className="flex">
          <div className="hidden w-12 md:inline-block">
            <IconButtonMenu
              title={NoticeTitle}
              items={NoticeItems}
              className="w-96"
            >
              <BellIcon className="w-7" />
            </IconButtonMenu>
          </div>
          <div className="w-12 ">
            <IconButtonMenu
              title={<UserTitle user={user} />}
              items={[
                AccountChangeItem(),
                SettingItem(),
                LogoutItem({
                  setOpen: () => {
                    setOpen(true)
                  },
                }),
                EndItem(),
              ]}
              className="absolute z-50 w-80 md:w-96"
            >
              <UserIcon className="w-7" />
            </IconButtonMenu>
          </div>
          <LogoutModal />
        </div>
      </div>
    </nav>
  )
}
