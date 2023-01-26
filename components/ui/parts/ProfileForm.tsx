import { ArrowPathIcon, UserIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { useProfile } from '../../../hooks/useProfile'
import { LineLoadingAtom } from '../../../recoil/other'
import { FormButton } from '../atoms/FormButton'
import { FormInput } from '../atoms/FormInput'
import { FormLabel } from '../atoms/FormLabel'
import { FormTextarea } from '../atoms/FormTextare'
import { IconBox } from '../atoms/IconBox'
import Form from '../elements/Form'

const ProfileForm: FC = () => {
  const { updateProfile, currentProfile, setCurrentProfile, resetProfile } =
    useProfile()
  const [isLoding, setIsLineLoading] = useRecoilState(LineLoadingAtom)

  return (
    <>
      <div className={`${!isLoding ? 'invisible' : 'visible'} h-1 w-full`}>
        <div className={`h-1  bg-slate-500 `} />
      </div>
      <Form
        className={'flex flex-col-reverse lg:flex-row'}
        onSubmit={async (e: any) => {
          try {
            e.preventDefault()
            setIsLineLoading(true)
            await updateProfile()
          } catch (error) {
            alert(error)
          } finally {
            setIsLineLoading(false)
          }
        }}
      >
        <div className="flex-auto">
          <div className="my-4 space-y-7 sm:mx-10">
            <div>
              <FormLabel>ユーザー名</FormLabel>
              <FormInput
                type="text"
                id="username"
                placeholder="ユーザー名"
                required
                autoComplete="username"
                value={currentProfile.username}
                setValue={(e: any) => {
                  setCurrentProfile({
                    ...currentProfile,
                    username: e.target.value,
                  })
                }}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div className="flex-1">
                <FormLabel>姓</FormLabel>
                <FormInput
                  type="text"
                  id="first_name"
                  placeholder="姓"
                  autoComplete=""
                  value={currentProfile.first_name}
                  setValue={(e: any) => {
                    setCurrentProfile({
                      ...currentProfile,
                      first_name: e.target?.value,
                    })
                  }}
                />
              </div>
              <div className="flex-1">
                <FormLabel>名</FormLabel>
                <FormInput
                  type="text"
                  id="last_name"
                  placeholder="名"
                  autoComplete=""
                  value={currentProfile.last_name}
                  setValue={(e: any) => {
                    setCurrentProfile({
                      ...currentProfile,
                      last_name: e.target.value,
                    })
                  }}
                />
              </div>
            </div>
            <div className="">
              <FormLabel>自分の概要</FormLabel>
              <FormTextarea
                id="password"
                placeholder="コメント"
                rows={4}
                autoComplete="current-password"
                value={currentProfile.self_introduction}
                setValue={(e: any) => {
                  setCurrentProfile({
                    ...currentProfile,
                    self_introduction: e.target.value,
                  })
                }}
              />
            </div>
            <div className="flex justify-end space-x-1 text-white">
              <FormButton type="submit">更新</FormButton>
              <div>
                <FormButton
                  type="button"
                  className="px-1.5"
                  onClick={(e: any) => {
                    e.preventDefault()
                    resetProfile()
                  }}
                >
                  <ArrowPathIcon className="w-6" />
                </FormButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="flex flex-col items-center m-4 space-y-5">
            <div className="relative w-60">
              <div className="absolute w-full px-2 py-1 bg-opacity-50 rounded-t-lg bg-slate-600 text-slate-50">
                アカウント 画像
              </div>
              <IconBox className="w-full border-2 rounded-lg shadow-md h-60">
                <UserIcon className="w-24 h-24 g-local " />
              </IconBox>
            </div>
            <div className="flex">
              <FormButton className="text-white">アップロード</FormButton>
            </div>
            <button>画像を削除</button>
          </div>
        </div>
      </Form>
    </>
  )
}

export default ProfileForm
