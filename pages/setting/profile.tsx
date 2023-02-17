import { Layout } from '@/components/layouts/Layout'
import { Main } from '@/components/layouts/Main'
import SideMenu from '@/components/ui/elements/SideMenu'
import ProfileForm from '@/components/ui/parts/ProfileForm'
import { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <Layout title="profile" className="h-screen bg-slate-50 ">
      <Main>
        <div className="flex">
          <SideMenu className="">
            <main>
              <div>
                <div className="border-b-2 px-2 hover:bg-slate-200">
                  <div className="mx-2">a</div>
                </div>
                <div className="border-b-2 px-2 hover:bg-slate-200">
                  <div className="mx-2">a</div>
                </div>
                <div className="border-b-2 px-2 hover:bg-slate-200">
                  <div className="mx-2">a</div>
                </div>
              </div>
            </main>
          </SideMenu>
          <div className="grow-1 w-full bg-slate-50">
            <div className="mx-auto pt-10">
              <div className="mx-10 max-w-4xl md:min-w-max">
                <div>
                  <header className="z-10 border-b-2 text-2xl">
                    <div className="ml-5">Profile</div>
                  </header>
                  <div className="-z-10 border-b-2">
                    <ProfileForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  )
}

export default Profile
