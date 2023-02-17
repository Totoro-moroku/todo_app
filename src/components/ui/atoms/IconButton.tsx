import { IconBox } from '@/components/ui/atoms/IconBox'
import { FC, ReactNode } from 'react'

export const IconButton: FC<{
  children: ReactNode
  className?: string
  onClick?: VoidFunction
}> = ({ children, className, onClick }) => {
  return (
    <IconBox>
      <div
        className={`${[
          'cursor-pointer',
          'rounded-md',
          'p-2',
          'text-white',
          'hover:bg-slate-300',
          ' hover:text-black',
        ].join(' ')} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </IconBox>
  )
}
