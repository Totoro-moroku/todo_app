import { IconBox } from '@/components/ui//atoms/IconBox'
import { UserIcon } from '@heroicons/react/24/outline'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import { FC } from 'react'

// TODO: add User Icon and User Profile page link
export const UserTitle: FC<{ user: User | null }> = ({ user }) => (
  <main className="p-3 text-center">
    <IconBox className="m-4">
      <div className="rounded-full bg-slate-400 p-6">
        <UserIcon className="h-10 w-10" />
      </div>
    </IconBox>
    <div>{user?.email}</div>
    <div className="rounded-3xl p-1 hover:bg-slate-300">
      <Link href={`/user/${user?.id}`} key={'user_profile'}>
        アカウント情報
      </Link>
    </div>
  </main>
)

export const SettingItem = () => (
  <Link href={`/setting`} key={'setting'} legacyBehavior>
    <a className="flex items-center justify-center border-t-2 p-3 hover:bg-slate-300">
      設定
    </a>
  </Link>
)

// TODO: add adding account page link
export const AccountChangeItem = () => (
  <div className="flex items-center justify-center border-t-2 p-3 hover:bg-slate-300">
    <button>別アカウントを追加</button>
  </div>
)

export const LogoutItem = ({ setOpen }: { setOpen: VoidFunction }) => {
  return (
    <>
      <div
        className="flex items-center justify-center border-t-2 p-3 hover:bg-slate-300"
        onClick={setOpen}
      >
        <button>ログアウト</button>
      </div>
    </>
  )
}

// TODO: add help and connection pages link
export const EndItem = () => (
  <div className="flex items-center justify-center border-t-2 p-2 text-sm">
    <button className="flex-1">ヘルプ</button>
    <button className="flex-1">問い合わせ</button>
  </div>
)
