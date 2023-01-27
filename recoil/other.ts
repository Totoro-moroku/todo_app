import { atom } from 'recoil'
import { AlertType } from '../types'

export const LoadingAtom = atom<boolean>({
  key: 'loading',
  default: false,
})

export const LineLoadingAtom = atom<boolean>({
  key: 'loding.line',
  default: false,
})

export const OpenLogoutAtom = atom<boolean>({
  key: 'open.logout',
  default: false,
})

export const AlertAtom = atom<AlertType>({
  key: 'alert',
  default: {
    open: false,
    message: null,
    color: null,
    time: 0,
  },
})