import { Alert } from '@/components/functions/Alert'
import FormButton from '@/components/ui/atoms/FormButton'
import FormInput from '@/components/ui/atoms/FormInput'
import FormLabel from '@/components/ui/atoms/FormLabel'
import FormTextarea from '@/components/ui/atoms/FormTextare'
import IconBox from '@/components/ui/atoms/IconBox'
import Form from '@/components/ui/elements/Form'
import useAlert from '@/hooks/useAlert'
import useProfile from '@/hooks/useProfile'
import { LineLoadingAtom } from '@/recoil/other'
import { UserIdSelector } from '@/recoil/user'
import { COLOR_TYPE } from '@/types'
import { ArrowPathIcon, UserIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

const ProfileForm: FC = () => {
  const userId = useRecoilValue(UserIdSelector)
  const { updateProfile, currentProfile, setCurrentProfile, resetProfile } =
    useProfile(userId)
  const [isLoding, setIsLineLoading] = useRecoilState(LineLoadingAtom)

  const { showAlert } = useAlert()

  return (
    <>
      <Alert>
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
              showAlert(COLOR_TYPE.GREEN, '成功', 1500)
              // showAlert(COLOR_TYPE.RED, '失敗', 1500)
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
            <div className="m-4 flex flex-col items-center space-y-5">
              <div className="z-0 h-60 w-60">
                <div className="h-8 w-full rounded-t-lg bg-slate-600 bg-opacity-50 px-2 py-1.5 text-slate-50">
                  アカウント 画像
                </div>
                <IconBox className="-mt-8 h-60 w-full rounded-lg border-2 shadow-md">
                  <UserIcon className="g-local h-24 w-24 " />
                </IconBox>
              </div>
              <div className="flex">
                <FormButton className="text-white">アップロード</FormButton>
              </div>
              <button>画像を削除</button>
            </div>
          </div>
        </Form>
      </Alert>
    </>
  )
}

export default ProfileForm
