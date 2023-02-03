import { IconBox } from '@/components/ui/atoms/IconBox'
import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// TODO: think what display
export const NoticeTitle = (
  <main className="px-3 py-1 text-sm">通知のタイトル</main>
)

// TODO: think params what have
export const NoticeItem = () => {
  return (
    <Link href="/#" key={'add_task'}>
      <main className="border-t-2 px-4 py-1">
        <div className="flex">
          <div className="flex-none pr-3">
            <IconBox>
              <div className="rounded-full bg-slate-300 p-2">
                <UserIcon className="h-5 w-5" />
              </div>
            </IconBox>
          </div>
          <div className="flex-1">
            <div>説明</div>
            <div className="text text-sm">time</div>
          </div>
        </div>
      </main>
    </Link>
  )
}
