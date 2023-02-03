import Header from '@/components/layouts/Header'
import { Layout } from '@/components/layouts/Layout'
import ProfileForm from '@/components/ui/parts/ProfileForm'
import { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <Layout title="profile" className="h-screen bg-slate-50 ">
      <Header />
      <div className="bg-slate-50">
        <div className="fixed inset-0 top-12 left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-56 overflow-y-auto border px-8 pb-10 md:block">
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
        <div className="md:pl-[max(0px,calc(50%-45rem))]">
          <div className="mx-auto pt-10 md:pl-56">
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
    </Layout>
  )
}

export default Profile
