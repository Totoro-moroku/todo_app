import { FormButton } from '@/components/ui/atoms/FormButton'
import { FormInput } from '@/components/ui/atoms/FormInput'
import Form from '@/components/ui/elements/Form'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'

function SignUpForm() {
  const [isShow, setIsShow] = useState(false)
  const passwordType = isShow ? 'text' : 'password'
  const { auth, setAuth, onSignUp } = useAuth()

  return (
    <Form
      className=""
      onSubmit={async (e) => {
        e.preventDefault()
        await onSignUp()
      }}
    >
      <div className="mt-10">
        <div className="mx-10 my-4 space-y-7">
          <div className="">
            <FormInput
              type="text"
              id="username"
              placeholder="ユーザー名"
              required
              autoComplete="username"
              setValue={(e: any) => {
                setAuth({ ...auth, username: e.target.value })
              }}
            />
            <div className="m-1 select-none text-xs text-gray-500">
              半角英字、数字、ピリオドを使用できます。
            </div>
          </div>
          <div className="">
            <FormInput
              type="email"
              id="email"
              placeholder="メールアドレス"
              required
              autoComplete="email"
              setValue={(e: any) => {
                setAuth({ ...auth, email: e.target.value })
              }}
            />
          </div>
          <div className="space-y-3">
            <div className="">
              <FormInput
                type={passwordType}
                id="password"
                placeholder="パスワード"
                autoComplete="new-password"
                required
                minLength={8}
                setValue={(e: any) => {
                  setAuth({ ...auth, password: e.target.value })
                }}
              />
            </div>
            <div className="">
              <FormInput
                type={passwordType}
                id="conf-password"
                placeholder="確認"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>
            <div className="m-1 select-none text-xs text-gray-500">
              半角英字、数字、記号を組み合わせて 8 文字以上で入力してください
            </div>
            <div className="mx-1 my-2 text-sm">
              <label className="m-1 flex space-x-4 ">
                <input
                  type="checkbox"
                  className="w-4 cursor-pointer"
                  onClick={() => {
                    setIsShow(!isShow)
                  }}
                />
                <div className="cursor-pointer select-none">
                  パスワードを表示する
                </div>
              </label>
            </div>
          </div>
          <div className="flex justify-end text-white">
            <FormButton className="shadow">作成</FormButton>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default SignUpForm
