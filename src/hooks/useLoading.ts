import { LineLoadingAtom, LoadingAtom } from '@/recoil/other'
import { useRecoilState } from 'recoil'

export const useLoading = () => {
  const [loading, setLoading] = useRecoilState(LoadingAtom)
  const [lineLoading, setLineLoading] = useRecoilState(LineLoadingAtom)

  return {
    loading,
    setLoading,
    lineLoading,
    setLineLoading,
  }
}
