import { atom } from 'recoil'
import { Profile } from '../types'

export const ProfileAtom = atom<Profile | null>({
  key: 'profile',
  default: null,
})

export const CurrentProfileAtom = atom<Profile>({
  key: 'current.profile',
  default: {
    id: '',
    updated_at: '',
    username: '',
    avatar_url: '',
    first_name: '',
    last_name: '',
    self_introduction: '',
  },
})