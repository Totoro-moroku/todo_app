import Layout from '@/components/layouts/Layout'
import Main from '@/components/layouts/Main'
import SideMenu from '@/components/ui/elements/SideMenu'

function Report() {
  return (
    <Layout title="reports">
      <Main className="flex w-full">
        <SideMenu className="w-0 flex-none md:w-52">
          <main></main>
        </SideMenu>
        <main className="flex flex-col"></main>
      </Main>
    </Layout>
  )
}

export default Report
