import { FormButton } from '@/components/ui/atoms/FormButton'
import { FormInput } from '@/components/ui/atoms/FormInput'
import Form from '@/components/ui/elements/Form'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { useState } from 'react'

function LoginForm() {
  const [isShow, setIsShow] = useState(false)
  const { auth, setAuth, onLogin } = useAuth()

  return (
    <Form
      className=" sm:w-96"
      onSubmit={async (e) => {
        e.preventDefault()
        await onLogin().then((_) => {})
      }}
    >
      <div className="mt-10">
        <div className="mx-10 my-4 space-y-7">
          <div className="">
            <FormInput
              type="email"
              id="email"
              placeholder="メールアドレスを入力"
              required
              autoComplete="email"
              value={auth.email}
              setValue={(e: any) => {
                setAuth({ ...auth, email: e.target.value })
              }}
            />
          </div>
          <div className="">
            <FormInput
              type={isShow ? 'text' : 'password'}
              id="password"
              placeholder="パスワードを入力"
              required
              autoComplete="current-password"
              value={auth.password}
              setValue={(e: any) => {
                setAuth({ ...auth, password: e.target.value })
              }}
            />
            <div className="mx-1 my-2 text-sm">
              <label className="m-1 flex space-x-4">
                <input
                  type="checkbox"
                  className="w-4"
                  value={`${isShow}`}
                  onClick={() => {
                    setIsShow(!isShow)
                  }}
                />
                <div className="">パスワードを表示する</div>
              </label>
            </div>
          </div>
          <div className="">
            <Link
              href={'/#'}
              key={''}
              className="px-2 py-1 text-xs hover:rounded-md hover:bg-slate-200"
            >
              パスワードをお忘れの場合
            </Link>
          </div>
          <div className="flex justify-end text-white">
            <FormButton type="submit">ログイン</FormButton>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default LoginForm
