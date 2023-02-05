import Header from '@/components/layouts/Header'
import { Layout } from '@/components/layouts/Layout'
import { SideBar } from '@/components/layouts/SideBar'
import ProfileForm from '@/components/ui/parts/ProfileForm'
import { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <Layout title="profile" className="h-screen bg-slate-50 ">
      <Header />
      <main className="flex">
        <SideBar className={'flex-none'} />
        <div className="flex flex-none">
          <div className="w-52 border">
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
          </div>
          <div className="bg-slate-50">
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
      </main>
    </Layout>
  )
}

export default Profile
