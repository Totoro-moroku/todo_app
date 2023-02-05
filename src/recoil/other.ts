import { persistAtomEffect } from '@/utils/presist'
import { atom } from 'recoil'

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

export const OpenSideBar = atom<boolean>({
  key: 'open.sidebar',
  default: true,
  effects_UNSTABLE: [persistAtomEffect],
})
