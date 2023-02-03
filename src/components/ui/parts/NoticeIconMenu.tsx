import { UserIcon } from '@heroicons/react/24/outline'
import { IconBox } from '../atoms/IconBox'
import Link from 'next/link'

// TODO: think what display
export const NoticeTitle = (
  <main className="px-3 py-1 text-sm">通知のタイトル</main>
)

// TODO: think params what have
export const NoticeItem = () => {
  return (
    <Link href="/#" key={'add_task'}>
      <main className="px-4 py-1 border-t-2">
        <div className="flex">
          <div className="flex-none pr-3">
            <IconBox>
              <div className="p-2 rounded-full bg-slate-300">
                <UserIcon className="w-5 h-5" />
              </div>
            </IconBox>
          </div>
          <div className="flex-1">
            <div>説明</div>
            <div className="text-sm text">time</div>
          </div>
        </div>
      </main>
    </Link>
  )
}
