import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useAuth } from '../../hooks/useAuth'
import { LoadingAtom } from '../../recoil/other'
import { Spinner } from './Spinner'

type AuthenticatorProps = {
  children: ReactNode
}

export const Authenticator: FC<AuthenticatorProps> = ({ children }) => {
  const [loading, setLoading] = useRecoilState(LoadingAtom)
  const { isLogin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLogin() && router.pathname !== '/login') {
      router.push('/login')
    }

    if (isLogin() && router.pathname === '/login') {
      setLoading(true)
      router.push('/home')
    }

    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [isLogin, router, loading, setLoading])

  return <>{loading ? <Spinner /> : children}</>
}
