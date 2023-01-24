import { atom } from 'recoil'

export const LoadingAtom = atom<boolean>({
  key: 'loading',
  default: false,
})

export const LineLoadingAtom = atom<boolean>({
  key: 'line.loding',
  default: false,
})
