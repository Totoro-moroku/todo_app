import { NextPage } from 'next'
import Header from '../../components/layouts/Header'
import { Layout } from '../../components/layouts/Layout'
import ProfileForm from '../../components/ui/parts/ProfileForm'

const Profile: NextPage = () => {
  return (
    <Layout title="profile" className="h-screen bg-slate-50 ">
      <Header />
      <div className="bg-slate-50">
        <div className="fixed inset-0 top-12 left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-56 overflow-y-auto border px-8 pb-10 md:block">
          <main>
            <div>
              <div className="px-2 border-b-2 hover:bg-slate-200">
                <div className="mx-2">a</div>
              </div>
              <div className="px-2 border-b-2 hover:bg-slate-200">
                <div className="mx-2">a</div>
              </div>
              <div className="px-2 border-b-2 hover:bg-slate-200">
                <div className="mx-2">a</div>
              </div>
            </div>
          </main>
        </div>
        <div className="md:pl-[max(0px,calc(50%-45rem))]">
          <div className="pt-10 mx-auto md:pl-56">
            <div className="max-w-4xl mx-10 md:min-w-max">
              <div>
                <header className="z-10 text-2xl border-b-2">
                  <div className="ml-5">Profile</div>
                </header>
                <div className="border-b-2 -z-10">
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
