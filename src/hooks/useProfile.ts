import { CurrentProfileAtom, ProfileAtom } from '@/recoil/profile'
import { supabase } from '@/utils/supabase'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const database = { from: 'profiles' }

const useProfile = (userId: string | undefined) => {
  const [profile, setProfile] = useRecoilState(ProfileAtom)
  const [currentProfile, setCurrentProfile] = useRecoilState(CurrentProfileAtom)

  useEffect(() => {
    if (!profile) {
      getProfile()
      return
    }

    setCurrentProfile({ ...profile })
  }, [profile, setCurrentProfile])

  const getProfile = async () => {
    const { data, error, status, statusText } = await supabase
      .from(database.from)
      .select('*')
      .eq('id', userId)
      .single()

    if (error && status === 406) {
      throw new Error(error.message)
    }

    if (data) {
      setProfile(data)
    }
  }

  const updateProfile = async () => {
    if (!currentProfile) return

    console.log(currentProfile)
    setCurrentProfile({ ...currentProfile, updated_at: new Date() })

    const { data, error, status, statusText } = await supabase
      .from(database.from)
      .update(currentProfile)
      .eq('id', userId)
      .select()

    if (error && status === 406) {
      throw new Error(error.message)
    }

    // @ts-ignore
    setProfile({ ...data[0] })
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

export default useProfile