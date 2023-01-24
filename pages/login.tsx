import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '../components/layouts/Layout'
import { IconBox } from '../components/ui/atoms/IconBox'
import LoginForm from '../components/ui/parts/LoginForm'
import SignUpForm from '../components/ui/parts/SignUpForm'
import { useAuth } from '../hooks/useAuth'

export const Login: NextPage = ({}) => {
  const [isLoginPage, setIsLoginPaeg] = useState(true)
  const { resetAuth } = useAuth()

  return (
    <Layout title="login" className="w-screen h-screen bg-slate-50">
      <>
        <div>
          <div className="flex mx-1 sm:h-screen sm:w-screen sm:items-center sm:justify-center">
            <div className="w-screen mt-8 lg: sm:mx-14 sm:mt-0 sm:max-w-max sm:rounded-md sm:border-2 sm:border-slate-400 sm:shadow-lg">
              <div className="mx-10 text-xl border-slate-400 sm:mx-0 sm:border-b-2 sm:text-sm">
                <div className="flex sm:py-2 sm:px-1">
                  <div>
                    <IconBox>
                      <CheckBadgeIcon className="sm:h-5 sm:w-5" />
                    </IconBox>
                  </div>
                  <span className="py-1 font-medium">
                    {isLoginPage ? 'アプリにログイン' : 'アカントを作成'}
                  </span>
                </div>
              </div>
              {isLoginPage ? <LoginForm /> : <SignUpForm />}
              <div className="flex justify-center px-2 py-3 text-sm underline">
                <button
                  className="px-2 py-1 hover:rounded-md hover:bg-slate-200"
                  onClick={() => {
                    setIsLoginPaeg(!isLoginPage)
                    resetAuth()
                  }}
                >
                  {isLoginPage ? 'アカウントを作成する' : 'ログインする'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Login
