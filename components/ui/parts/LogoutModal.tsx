import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { atom, useRecoilState } from 'recoil'
import { useAuth } from '../../../hooks/useAuth'
import { IconBox } from '../atoms/IconBox'
import { Modal } from '../elements/Modal'

export const isOpenLogoutModalAtom = atom({
  key: 'logout.modal',
  default: false,
})

export const LogoutModal = () => {
  const [isOpen, setOpen] = useRecoilState(isOpenLogoutModalAtom)
  const onClose = () => {
    setOpen(false)
  }
  const { onLogOut } = useAuth()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="inline-block mx-5 overflow-hidden align-middle transition-all transform my-52">
        <main className="px-4 py-2 bg-white rounded-md shadow-xl w-80">
          <div className="flex flex-col items-stretch w-full justify-items-center">
            <div className="flex py-2 text-sm text-left text-gray-500">
              <div className="flex-none py-1 pr-2">
                <IconBox>
                  <ExclamationCircleIcon className="w-6 h-6" />
                </IconBox>
              </div>
              <div className="flex-1 py-2">ログアウトしても大丈夫ですか？</div>
            </div>
            <div className="flex space-x-2 h-11">
              <button
                className="flex-1 py-1 rounded-md bg-slate-400 ring-slate-300 hover:bg-slate-500 hover:text-white hover:ring-1"
                onClick={() => {
                  onClose()
                  onLogOut()
                }}
              >
                はい
              </button>
              <button
                className="flex-1 py-1 rounded-md bg-slate-400 ring-slate-300 hover:bg-slate-500 hover:text-white hover:ring-1"
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
