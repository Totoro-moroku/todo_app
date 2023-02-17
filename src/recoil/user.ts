import { AuthType } from '@/types'
import { persistAtom } from '@/utils/presist'
import { User } from '@supabase/supabase-js'
import { atom, selector } from 'recoil'

export const UserAtom = atom<User | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const UserIdSelector = selector<User['id'] | undefined>({
  key: 'user.id',
  get: ({ get }) => {
    const user = get(UserAtom)
    return user?.id
  },
})

export const AuthAtom = atom<AuthType>({
  key: 'user.auth',
  default: { username: '', email: '', password: '' },
})

export const StandBy = atom<boolean>({
  key: 'standby',
  default: false,
})
