import { Header } from '@/components/layouts/Header'
import { Layout } from '@/components/layouts/Layout'
import { SideBar } from '@/components/layouts/SideBar'
import { useTask } from '@/hooks/useTask'
import { FC } from 'react'

const Home: FC = () => {
  const test = useTask()
  console.log('test', test)

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
