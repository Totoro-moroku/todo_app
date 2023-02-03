import { useAuth } from '@/hooks/useAuth'
import { OpenLogoutAtom } from '@/recoil/other'
import { BellIcon, UserIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { IconButtonMenu } from '../ui/elements/IconMenu'
import { LogoutModal } from '../ui/parts/LogoutModal'
import { NoticeItem, NoticeTitle } from '../ui/parts/NoticeIconMenu'
import {
  AccountChangeItem,
  EndItem,
  LogoutItem,
  SettingItem,
  UserTitle,
} from '../ui/parts/UserIconMenu'

const NoticeItems = [NoticeItem]

type HeaderProps = {
  className?: string | undefined
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { user } = useAuth()
  const setOpen = useSetRecoilState(OpenLogoutAtom)

  return (
    <nav className={`${className} z-50 bg-slate-400`}>
      <div className="flex h-12 px-4">
        <div className="flex">
          <div className="w-12"></div>
          <div className="w-12"></div>
        </div>
        <div className="grow"></div>
        <div className="flex">
          <div className="invisible w-12 md:visible">
            <IconButtonMenu
              title={NoticeTitle}
              items={NoticeItems}
              className="w-96"
            >
              <BellIcon className="h-6 w-6" />
            </IconButtonMenu>
          </div>
          <div className="w-12">
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
              className="w-80 md:w-96"
            >
              <UserIcon className="h-6 w-6" />
            </IconButtonMenu>
          </div>
          <LogoutModal />
        </div>
      </div>
    </nav>
  )
}

export default Header
