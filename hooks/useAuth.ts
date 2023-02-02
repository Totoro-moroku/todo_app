import { User } from '@supabase/supabase-js'
import { atom, useRecoilState, useResetRecoilState } from 'recoil'
import { AuthAtom, CurrentUserIDAtom, UserAtom } from '../recoil/user'
import { supabase } from '../utils/supabase'

const LoddingAtom = atom({ key: 'loading', default: false })

export const useAuth = () => {
  const [{ username, email, password }, setAuth] = useRecoilState(AuthAtom)
  const resetAuth = useResetRecoilState(AuthAtom)
  const [user, setUser] = useRecoilState(UserAtom)
  const [userId, setUserId] = useRecoilState(CurrentUserIDAtom)
  const [loading, setLoading] = useRecoilState(LoddingAtom)

  const isLogin = () => user !== null

  const setUserData = (data: User | null) => {
    setUser(data)
    setUserId(data !== null ? data.id : '')
  }

  const onSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      })

      if (error) throw new Error(error.message)
      if (!data.user) throw new Error('dont find user')
      setUserData(data.user)
    } catch (error) {
      alert(error)
      resetAuth()
    }
  }

  const onLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw new Error(error.message)
      if (!data.user) throw new Error('dont find user')
      setUserData(data.user)
    } catch (error) {
      alert(error)
      resetAuth()
    }
  }

  const onLogOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw new Error(error.message)
      setUserData(null)
      resetAuth()
      console.log('成功')
    } catch (error) {
      alert(error)
    }
  }

  return {
    auth: { username, email, password },
    user,
    loading,
    setLoading,
    isLogin,
    setAuth,
    resetAuth,
    onSignUp,
    onLogin,
    onLogOut,
  }
}
