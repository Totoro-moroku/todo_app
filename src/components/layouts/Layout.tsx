import { Authenticator } from '@/components/functions/Authenticator'
import { useSsrComplectedState } from '@/utils/presist'
import Head from 'next/head'
import { FC, ReactNode, useLayoutEffect } from 'react'

type LayoutProps = {
  children?: ReactNode
  title: string
  className?: string | undefined
}

const Layout: FC<LayoutProps> = ({ children, title, className }) => {
  const setSsrCompleted = useSsrComplectedState()

  useLayoutEffect(setSsrCompleted, [setSsrCompleted])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Authenticator>
        <main className={className}>{children}</main>
      </Authenticator>
    </>
  )
}

export default Layout
