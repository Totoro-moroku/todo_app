import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

type AuthenticatorProps = {
  children?: ReactNode
  url: string
}

export const AutoRedirect: FC<AuthenticatorProps> = ({ children, url }) => {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== url) router.push(url)
  }, [url, router])

  return <>{children}</>
}


