import { Spinner } from '@/components/functions/Spinner'
import { Layout } from '@/components/layouts/Layout'
import { NextPage } from 'next'
import Router from 'next/router'

const Setting: NextPage = () => {
  return (
    <Layout title="設定">
      <Spinner />
    </Layout>
  )
}

Setting.getInitialProps = async ({ res }) => {
  if (typeof window === 'undefined') {
    res?.writeHead(302, { Location: '/setting/profile' })
    res?.end()
    return {}
  }

  Router.push('/setting/profile')
  return {}
}

export default Setting
