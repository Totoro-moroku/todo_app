import Spinner from '@/components/functions/Spinner'
import useAuth from '@/hooks/useAuth'
import { LoadingAtom } from '@/recoil/other'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import { useRecoilState } from 'recoil'

type AuthenticatorProps = {
  children: ReactNode
}

export const Authenticator: FC<AuthenticatorProps> = ({ children }) => {
  const [loading, setLoading] = useRecoilState(LoadingAtom)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null && router.pathname !== '/login') {
      router.push('/login')
    }

    if (user && ['/login', '/'].includes(router.pathname)) {
      setLoading(true)
      router.push('/home')
    }

    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [user, router, loading, setLoading])

  return <>{loading ? <Spinner /> : children}</>
}
