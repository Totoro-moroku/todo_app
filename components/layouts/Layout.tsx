import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Authenticator } from '../functions/Authenticator'

type LayoutProps = {
  children: ReactNode
  title: string
  className?: string | undefined
}

export const Layout: FC<LayoutProps> = ({ children, title, className }) => {
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
