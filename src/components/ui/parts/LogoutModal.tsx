import { IconBox } from '@/components/ui/atoms/IconBox'
import { Modal } from '@/components/ui/elements/Modal'
import { useAuth } from '@/hooks/useAuth'
import { OpenLogoutAtom } from '@/recoil/other'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'

export const LogoutModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(OpenLogoutAtom)
  const onClose = () => {
    setIsOpen(false)
  }
  const { onLogOut } = useAuth()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mx-5 my-52 inline-block transform overflow-hidden align-middle transition-all">
        <main className="w-80 rounded-md bg-white px-4 py-2 shadow-xl">
          <div className="flex w-full flex-col items-stretch justify-items-center">
            <div className="flex py-2 text-left text-sm text-gray-500">
              <div className="flex-none py-1 pr-2">
                <IconBox>
                  <ExclamationCircleIcon className="h-6 w-6" />
                </IconBox>
              </div>
              <div className="flex-1 py-2">ログアウトしても大丈夫ですか？</div>
            </div>
            <div className="flex h-11 space-x-2">
              <button
                className="flex-1 rounded-md bg-slate-400 py-1 ring-slate-300 hover:bg-slate-500 hover:text-white hover:ring-1"
                onClick={() => {
                  onClose()
                  onLogOut()
                }}
              >
                はい
              </button>
              <button
                className="flex-1 rounded-md bg-slate-400 py-1 ring-slate-300 hover:bg-slate-500 hover:text-white hover:ring-1"
                onClick={onClose}
              >
                いいえ
              </button>
            </div>
          </div>
        </main>
      </div>
    </Modal>
  )
}
