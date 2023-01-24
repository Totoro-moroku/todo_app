import { User } from '@supabase/supabase-js'
import { atom } from 'recoil'
import { AuthType } from '../types'
import { persistAtom } from '../utils/presist'

export const UserAtom = atom<User | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const CurrentUserIDAtom = atom<User['id'] | null>({
  key: 'user.id',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const AuthAtom = atom<AuthType>({
  key: 'user.auth',
  default: { username: '', email: '', password: '' },
})

export const StandBy = atom<boolean>({
  key: 'standby',
  default: false,
})