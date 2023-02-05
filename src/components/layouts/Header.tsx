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
import { OpenLogoutAtom } from '@/recoil/other'
import { BellIcon, UserIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useSetRecoilState } from 'recoil'

const NoticeItems = [NoticeItem]

type HeaderProps = {
  className?: string | undefined
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { user } = useAuth()
  const setOpen = useSetRecoilState(OpenLogoutAtom)

  return (
    <nav
      className={`${className} fixed right-0 top-0 left-0 z-10 bg-slate-400 lg:static`}
    >
      <div className="flex h-14 px-4">
        <div className="flex">
          <div className="w-12"></div>
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
              <UserIcon className="w-7" />
            </IconButtonMenu>
          </div>
          <LogoutModal />
        </div>
      </div>
    </nav>
  )
}

export default Header
