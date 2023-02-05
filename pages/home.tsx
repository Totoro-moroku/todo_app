import Header from '@/components/layouts/Header'
import { Layout } from '@/components/layouts/Layout'
import { SideBar } from '@/components/layouts/SideBar'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout title="Home">
      <Header />
      <SideBar />

      <main>
        <div>teaaaaaaaaast</div>
      </main>
    </Layout>
  )
}

export default Home
