import { atom } from 'recoil'
import { Profile } from '../types'

export const ProfileAtom = atom<Profile | null>({
  key: 'profile',
  default: null,
})

export const CurrentProfileAtom = atom<Profile | null>({
  key: 'currentProfile',
  default: null,
})