import {
  AlertAtom,
  AlertColorSelector,
  AlertIconSelector,
} from '@/recoil/alert'
import { COLOR_TYPE } from '@/types'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

const useAlert = () => {
  const [alert, setAlert] = useRecoilState(AlertAtom)
  const color = useRecoilValue(AlertColorSelector)
  const reset = useResetRecoilState(AlertAtom)
  const Icon = useRecoilValue(AlertIconSelector)

  const showAlert = (
    color: COLOR_TYPE,
    message: string,
    time: number = 1500
  ) => {
    setAlert({
      open: true,
      message: message,
      color: color,
      time: time,
    })
  }

  const hideAlert = (): void => {
    reset()
  }

  return {
    alert,
    Icon,
    color,
    showAlert,
    hideAlert,
  }
}

export default useAlert