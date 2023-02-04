import { FC } from 'react'
export const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-8 h-8 my-5 border-4 border-gray-600 rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}
