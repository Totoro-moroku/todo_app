import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentProfileAtom, ProfileAtom } from '../state/profile'
import { UserAtom } from '../state/user'
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

    console.log(data)
    console.log(status)

    if (error && status === 406) {
      throw new Error(error.message)
    }
  }

  return {
    profile,
    setProfile,
    currentProfile,
    setCurrentProfile,
    getProfile,
    updateProfile,
  }
}
