import { NextPage } from 'next'
import Router from 'next/router'

interface Props {
  userAgent?: string
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

Page.getInitialProps = async ({ res }) => {
  // サーバー側でリダイレクト
  if (typeof window === 'undefined' && res !== undefined) {
    res.writeHead(302, { Location: '/' })
    res.end()

    return {} // 空オブジェクトだと警告文が発生するので注意してください！
  }

  // クライアント側でリダイレクト
  Router.push('/setting/profile')

  return {} // 同上
}

export default Page
