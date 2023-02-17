import { FC } from 'react'
export const Spinner: FC = () => {
  return (
    <div
      className={[
        'flex',
        'h-screen',
        'w-screen',
        'items-center ',
        'justify-center',
      ].join(' ')}
    >
      <div
        className={[
          'my-5',
          'h-8',
          'w-8',
          'animate-spin',
          'rounded-full',
          'border-4',
          'border-gray-600',
          'border-t-transparent',
        ].join(' ')}
      ></div>
    </div>
  )
}
