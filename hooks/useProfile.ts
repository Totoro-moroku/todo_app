import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentProfileAtom, ProfileAtom } from '../recoil/profile'
import { UserAtom } from '../recoil/user'
import { supabase } from '../utils/supabase'

const database = { from: 'profiles' }

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(ProfileAtom)
  const [currentProfile, setCurrentProfile] = useRecoilState(CurrentProfileAtom)
  const user = useRecoilValue(UserAtom)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const { data, error, status } = await supabase
      .from(database.from)
      .select('*')
      .eq('id', user?.id)
      .single()

    if (error && status === 406) {
      throw new Error(error.message)
    }

    if (data) {
      setProfile(data)
      setCurrentProfile(data)
    }
  }

  const updateProfile = async () => {
    if (!currentProfile) return

    setCurrentProfile({ ...currentProfile, updated_at: new Date() })

    const { data, error, status } = await supabase
      .from(database.from)
      .update(currentProfile)
      .eq('id', currentProfile?.id)
      .select()

    if (error && status === 406) {
      throw new Error(error.message)
    }

    //@ts-ignore
    setProfile({ ...data[0] })
    resetProfile()
  }

  const resetProfile = () => {
    if (profile) {
      setCurrentProfile({ ...profile })
    } else {
      throw new Error('do not have profile')
    }
  }

  return {
    profile,
    setProfile,
    currentProfile,
    setCurrentProfile,
    resetProfile,
    getProfile,
    updateProfile,
  }
}
